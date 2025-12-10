'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Menu, X, Package } from 'lucide-react';
import { useCart } from '@/components/CartCibtext';
import { CartModal } from './CartModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 text-black border-b border-white/20">
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold"><Link href="#">Mayra Origin</Link></h1>
          
          <div className={`md:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md p-4 border-b border-white/20' : 'hidden md:flex absolute left-1/2 -translate-x-1/2'}`}>
            <Link href="#" className="hover:text-gray-600">Home</Link>
            <Link 
              href="#shop" 
              onClick={(e) => {
                e.preventDefault();
                router.push('?category=all#shop');
              }}
              className="hover:text-gray-600"
            >
              Shop
            </Link>
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

            {mounted && localStorage.getItem('isOrderPlaced') === 'true' && (
              <Link 
                href="/order-success"
                className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Package className="w-5 h-5" />
                <span className="hidden md:inline">View Order</span>
              </Link>
            )}

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}