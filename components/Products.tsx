'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from './ProductCard';
// import { products } from '@/data/products'; // Remove this import
import { Product } from '@/models/Product'; // Import Product type

interface ProductsProps {
  products: Product[]; // Add products prop
}

export function Products({ products }: ProductsProps) { // Accept products prop
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState('all');
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const urlCategory = searchParams?.get('category');
      if (urlCategory) {
        setCategory(urlCategory);
        setShowAll(true);
      } else {
        setCategory('all');
        setShowAll(false);
      }
    }
  }, [searchParams, mounted]);

  // Ensure products array exists and is valid
  const validProducts = products && Array.isArray(products) ? products : [];
  
  const filteredProducts = category === 'all' 
    ? validProducts 
    : validProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());

  // Use stable sorting instead of random shuffle to prevent hydration errors
  const sortedProducts = [...filteredProducts].sort((a, b) => a.id - b.id);

  const displayProducts = showAll ? sortedProducts : sortedProducts.slice(0, 4);

  // Show loading state if no products
  if (validProducts.length === 0) {
    return (
      <section id="shop" className="mx-[16px] md:mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-lg shadow-sm mx-5 sm:mx-auto">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-black mb-4">Featured Products</h2>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="mx-[16px] md:mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-lg shadow-sm mx-5 sm:mx-auto">
      <div className="flex justify-between items-center mb-8 animate-slideInDown">
        <h2 className="text-3xl font-bold text-black sm:text-4xl text-xl">Featured Products</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="sm:text-indigo-600 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 hover-scale text-sm sm:text-base"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory('all')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  category === 'all' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                All
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory('men')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  category === 'men' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Men
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory('women')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  category === 'women' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Women
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
      >
        <AnimatePresence>
          {displayProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}