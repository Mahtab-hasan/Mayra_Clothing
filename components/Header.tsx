'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/components/CartCibtext';
import { CartModal } from './CartModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 text-black">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mayra Clothing</h1>
        
        <div className={`md:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white p-4' : 'hidden md:flex'}`}>
          <Link href="#" className="hover:text-gray-600">Home</Link>
          <Link href="#shop" className="hover:text-gray-600">Shop</Link>
          <Link href="#about" className="hover:text-gray-600">About</Link>
          <Link href="#contact" className="hover:text-gray-600">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-6 h-6" />
            {mounted && cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}