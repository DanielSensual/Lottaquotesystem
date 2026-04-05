import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATHEIA — Brand Photoshoot Quote',
  description: 'Premium campaign visuals for ATHEIA sportswear. 2-hour brand photoshoot designed to give ATHEIA a stronger, cleaner visual identity.',
  openGraph: {
    title: 'ATHEIA — Brand Photoshoot Quote',
    description: 'Premium campaign visuals built to look like a real brand launch.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
