import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Horizon Placements | Global Healthcare & Overseas Recruitment',
  description:
    'Providing end-to-end solutions for candidates and employers worldwide. Specializing in healthcare recruitment, Gulf documentation, Dataflow verification, and medical staffing.',
  icons: {
    icon: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
