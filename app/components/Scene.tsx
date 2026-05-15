// ─────────────────────────────────────────────────────────────
// Scene.tsx — the 3D particle scene that morphs as you scroll.
//
// 📚 Next.js note: the `'use client'` directive at the top tells
//   Next.js this component runs in the BROWSER, not on the server.
//   We need it because Three.js touches `window` and the GPU —
//   things that don't exist during server-side rendering.
//   Most Next.js components default to server-rendering for speed;
//   you only mark a file `'use client'` when it needs interactivity,
//   hooks like useState/useEffect, or browser APIs.
//
// If you're new to React: think of the rest of this file as one
// long "side-effect" that boots up a WebGL scene once the page is
// in the browser, then cleans up when the user leaves. The fancy
// math (sphere/cube/torus/arrow generators) is just where each
// particle should sit in 3D space for that section.
// ─────────────────────────────────────────────────────────────
'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 2800;

type V3 = Float32Array;

function generateSphere(n: number): V3 {
  const arr = new Float32Array(n * 3);
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    arr[i * 3] = Math.cos(theta) * r * 3;
    arr[i * 3 + 1] = y * 3;
    arr[i * 3 + 2] = Math.sin(theta) * r * 3;
  }
  return arr;
}

function generateCubeWire(n: number): V3 {
  const arr = new Float32Array(n * 3);
  const s = 2.6;
  const edges: [number[], number[]][] = [
    [[-s, -s, -s], [s, -s, -s]],
    [[s, -s, -s], [s, -s, s]],
    [[s, -s, s], [-s, -s, s]],
    [[-s, -s, s], [-s, -s, -s]],
    [[-s, s, -s], [s, s, -s]],
    [[s, s, -s], [s, s, s]],
    [[s, s, s], [-s, s, s]],
    [[-s, s, s], [-s, s, -s]],
    [[-s, -s, -s], [-s, s, -s]],
    [[s, -s, -s], [s, s, -s]],
    [[s, -s, s], [s, s, s]],
    [[-s, -s, s], [-s, s, s]],
  ];
  for (let i = 0; i < n; i++) {
    const e = edges[i % edges.length];
    const t = ((i / edges.length) % 1);
    const jitter = (Math.random() - 0.5) * 0.08;
    arr[i * 3] = e[0][0] + (e[1][0] - e[0][0]) * t + jitter;
    arr[i * 3 + 1] = e[0][1] + (e[1][1] - e[0][1]) * t + jitter;
    arr[i * 3 + 2] = e[0][2] + (e[1][2] - e[0][2]) * t + jitter;
  }
  return arr;
}

function generateGrid(n: number): V3 {
  const arr = new Float32Array(n * 3);
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  const size = 6.5;
  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    arr[i * 3] = (col / (cols - 1) - 0.5) * size;
    arr[i * 3 + 1] = -(row / Math.max(1, rows - 1) - 0.5) * size;
    arr[i * 3 + 2] =
      Math.sin(col * 0.4) * 0.3 + Math.cos(row * 0.4) * 0.3;
  }
  return arr;
}

function generateTorus(n: number): V3 {
  const arr = new Float32Array(n * 3);
  const R = 2.4;
  const r = 0.85;
  for (let i = 0; i < n; i++) {
    const u = (i / n) * Math.PI * 2 * 3;
    const v = ((i * 7919) % n) / n * Math.PI * 2;
    const cosV = Math.cos(v);
    arr[i * 3] = (R + r * cosV) * Math.cos(u);
    arr[i * 3 + 1] = (R + r * cosV) * Math.sin(u);
    arr[i * 3 + 2] = r * Math.sin(v);
  }
  return arr;
}

function generateHelix(n: number): V3 {
  // A vertical double-helix-ish column — visual rhyme with the
  // Career section's timeline spine.
  const arr = new Float32Array(n * 3);
  const height = 6.4;
  const radius = 1.7;
  const turns = 4;
  for (let i = 0; i < n; i++) {
    const t = i / n;
    const angle = t * Math.PI * 2 * turns + (i % 2 === 0 ? 0 : Math.PI);
    const y = -height / 2 + t * height;
    arr[i * 3] = Math.cos(angle) * radius;
    arr[i * 3 + 1] = y;
    arr[i * 3 + 2] = Math.sin(angle) * radius;
  }
  return arr;
}

function generateArrow(n: number): V3 {
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const t = i / n;
    const z = -3 + t * 6;
    const radius = Math.pow(1 - t, 0.7) * 2.4 + 0.05;
    const angle = i * 2.399;
    const jitter = (Math.random() - 0.5) * 0.15;
    arr[i * 3] = Math.cos(angle) * radius + jitter;
    arr[i * 3 + 1] = Math.sin(angle) * radius + jitter;
    arr[i * 3 + 2] = z;
  }
  return arr;
}

const COLORS = [
  [0.0, 0.94, 1.0],   // cyan — Arrival
  [0.49, 0.23, 1.0],  // violet — What I Do
  [1.0, 0.17, 0.84],  // magenta — Work
  [1.0, 0.53, 0.33],  // peach — Career
  [0.79, 1.0, 0.2],   // lime — Recommendations
  [0.0, 0.94, 1.0],   // cyan — Talk
];

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let cleanup = () => {};
    let mounted = true;

    (async () => {
      const THREE = await import('three');
      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      const gsap = gsapMod.default;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x05060a, 0.06);

      const camera = new THREE.PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 8);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Pre-compute target shapes
      const shapes: V3[] = [
        generateSphere(PARTICLE_COUNT),
        generateCubeWire(PARTICLE_COUNT),
        generateGrid(PARTICLE_COUNT),
        generateHelix(PARTICLE_COUNT),
        generateTorus(PARTICLE_COUNT),
        generateArrow(PARTICLE_COUNT),
      ];

      // Current positions buffer (starts at sphere)
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      positions.set(shapes[0]);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        size: 0.045,
        color: new THREE.Color(COLORS[0][0], COLORS[0][1], COLORS[0][2]),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // Subtle ambient glow ring
      const ringGeom = new THREE.RingGeometry(5, 5.05, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.06,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      scene.add(ring);

      // Mouse parallax
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMouse = (e: MouseEvent) => {
        mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouse);

      // Scroll-driven morph state
      const state = { morph: 0 };
      const st = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          state.morph = self.progress * (shapes.length - 1);
        },
      });

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      // Color interpolation helper
      const tmpColor = new THREE.Color();
      const lerpColor = (a: number[], b: number[], t: number, out: THREE.Color) => {
        out.setRGB(
          a[0] + (b[0] - a[0]) * t,
          a[1] + (b[1] - a[1]) * t,
          a[2] + (b[2] - a[2]) * t
        );
      };

      const LERP_SPEED = 0.06;
      const ROT_SPEED = 0.0008;
      let rafId = 0;
      const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;

      const animate = () => {
        rafId = requestAnimationFrame(animate);

        const m = Math.max(0, Math.min(shapes.length - 1.0001, state.morph));
        const i0 = Math.floor(m);
        const i1 = Math.min(shapes.length - 1, i0 + 1);
        const t = m - i0;

        const a = shapes[i0];
        const b = shapes[i1];
        const buf = posAttr.array as Float32Array;

        // Particle morph (smoothed toward target)
        for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
          const target = a[i] + (b[i] - a[i]) * t;
          buf[i] += (target - buf[i]) * LERP_SPEED;
        }
        posAttr.needsUpdate = true;

        // Color morph
        lerpColor(COLORS[i0], COLORS[i1], t, tmpColor);
        material.color.copy(tmpColor);
        ringMat.color.copy(tmpColor);

        // Rotation + parallax
        points.rotation.y += ROT_SPEED;
        points.rotation.x = mouse.y * -0.15;
        ring.rotation.z += ROT_SPEED * 0.5;
        ring.rotation.x = Math.PI / 2.2 + mouse.y * -0.1;

        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
        camera.position.x = mouse.x * 0.6;
        camera.position.y = mouse.y * -0.4;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(rafId);
        st.kill();
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('resize', onResize);
        geometry.dispose();
        material.dispose();
        ringGeom.dispose();
        ringMat.dispose();
        renderer.dispose();
        if (renderer.domElement.parentElement) {
          renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    />
  );
}
