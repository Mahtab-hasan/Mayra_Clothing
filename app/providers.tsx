'use client';

import { ThemeProvider } from 'next-themes';
import { CartProvider } from '@/contexts/CartContext';
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