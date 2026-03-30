import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'PPL Ground School',
  description: 'UK PPL(A) ground school - learn, practice, and test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 pt-16 md:pt-0 px-4 py-6 md:p-8 bg-slate-50 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
