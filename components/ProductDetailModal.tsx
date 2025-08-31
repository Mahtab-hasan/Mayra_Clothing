'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/models/Product';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useCart } from '@/components/CartCibtext';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showFullImage, setShowFullImage] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    router.push('/checkout');
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    toast.success('Added to cart!');
    onClose();
  };

  return (
    <>
      {/* Full Image View Modal */}
      <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none backdrop-blur-sm">
          <div className="relative w-full h-[80vh]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              onClick={() => setShowFullImage(false)}
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Product Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-square cursor-zoom-in" onClick={() => setShowFullImage(true)}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                Click to enlarge
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="text-3xl font-bold">৳{product.price}</h3>
                {product.description && (
                  <p className="text-gray-600">{product.description}</p>
                )}
              </div>

              <div className="space-y-4">
                {product.sizes && (
                  <div>
                    <h4 className="font-medium mb-2">Select Size</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded-full text-sm md:text-base transition-colors ${
                            selectedSize === size 
                              ? 'bg-black text-white border-black' 
                              : 'hover:bg-gray-100 border-gray-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.colors && (
                  <div>
                    <h4 className="font-medium mb-2">Select Color</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all ${
                            selectedColor === color 
                              ? 'ring-2 ring-offset-2 ring-black' 
                              : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Color ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-medium mb-2">Quantity</h4>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 md:w-10 md:h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 md:w-10 md:h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full py-4 md:py-6 text-base md:text-lg bg-[#1c1c1c] text-white hover:bg-[#5d5c5c] transition-colors"
                  disabled={!selectedSize || !selectedColor}
                >
                  Add to Cart - ৳{product.price * quantity}
                </Button>
                <Button
                  onClick={handleBuyNow}
                  className="w-full py-4 md:py-6 text-base md:text-lg bg-[#1c1c1c] text-white hover:bg-[#5d5c5c] transition-colors"
                  disabled={!selectedSize || !selectedColor}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}