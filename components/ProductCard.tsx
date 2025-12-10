'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/models/Product';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div
        className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            quality={50}
            loading="lazy"
            className={`object-cover transition-transform duration-300 sm:group-hover:scale-150 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-black">{product.name}</h3>
          <p className="text-black mb-2">{product.category}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-black">৳{product.price}</span>
            <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
