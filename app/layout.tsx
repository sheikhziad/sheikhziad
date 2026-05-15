import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sheikh Ziad Ahmed — Builds apps. Leads delivery. Ships things.',
  description:
    'AI-native product builder & technical project lead. 3+ years shipping apps from solo agencies to enterprise — 5M+ users reached. Open to founding engineer, technical PM, and customer-success roles.',
  metadataBase: new URL('https://sheikhziad.github.io'),
  openGraph: {
    title: 'Sheikh Ziad Ahmed',
    description:
      'Builds apps. Leads delivery. Ships things. 3+ years across startup → enterprise.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="bg-ink-50 text-ink-800 antialiased">{children}</body>
    </html>
  );
}
