'use client';

import Image from 'next/image';
import { Trash2, Minus, Plus, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { useCart } from '@/components/CartCibtext';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    onClose();
    window.location.href = '/checkout';
  };

  if (!mounted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col bg-white">
        <DialogTitle>Shopping Cart</DialogTitle>
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold text-black">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-black">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto py-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-black">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-black">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Size: {item.selectedSize} | Color: {item.selectedColor}
                        </p>
                        <p className="text-lg font-semibold text-black mt-2">
                          ৳{item.price} × {item.quantity} = ৳{item.price * item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-2 rounded-full hover:bg-gray-200 border border-gray-300 text-black"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-black font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-2 rounded-full hover:bg-gray-200 border border-gray-300 text-black"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-black">Total:</span>
            <span className="text-2xl font-bold text-black">৳{getCartTotal()}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={onClose}
              className="py-6 text-lg bg-white text-black border-2 border-black hover:bg-gray-100 transition-colors"
            >
              Continue Shopping
            </Button>
            <Button
              onClick={handleCheckout}
              className="py-6 text-lg bg-black text-white hover:bg-gray-800 transition-colors"
              disabled={items.length === 0}
            >
              Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 