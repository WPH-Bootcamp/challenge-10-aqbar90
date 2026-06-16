import type { Metadata } from 'next';

import './globals.css';

import Providers from '@/providers/Providers';
import { AuthHydrator } from '@/components/providers/AuthHydrator';
import { Toaster } from 'sonner';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Restaurant App',
  description: 'Restaurant Ordering Application',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <AuthHydrator />
          {children}

          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
