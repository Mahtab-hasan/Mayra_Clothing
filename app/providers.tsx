'use client';

import { ThemeProvider } from 'next-themes';
import { CartProvider, useCart } from '@/components/CartCibtext';
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

function ClearCartButton() {
  const { clearCart } = useCart();
  return (
    <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded">
      Clear Cart
    </button>
  );
}