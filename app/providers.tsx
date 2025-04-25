'use client';

import { ThemeProvider } from 'next-themes';
import { CartProvider } from '@/components/CartCibtext';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        {children}
        <Toaster position="top-center" />
      </CartProvider>
    </ThemeProvider>
  );
}