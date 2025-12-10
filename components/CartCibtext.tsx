import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '@/models/Product';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  sizes: string[];
  colors: string[];
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, selectedSize: string, selectedColor: string) => void;
  removeFromCart: (productId: number, selectedSize: string, selectedColor: string) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cartItems');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number, selectedSize: string, selectedColor: string) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );

      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { 
        id: product.id || 0, 
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
        quantity,
        selectedSize,
        selectedColor,
        sizes: product.sizes,
        colors: product.colors
      }];
    });
  };

  const removeFromCart = (productId: number, selectedSize: string, selectedColor: string) => {
    setItems(currentItems => 
      currentItems.filter(item => 
        !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}