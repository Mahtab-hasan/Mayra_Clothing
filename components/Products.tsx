// 'use client';

// import { useState } from 'react';
// import { ProductCard } from './ProductCard';
// import { products } from '@/data/products';

// export function Products() {
//   const [showAll, setShowAll] = useState(false);
//   const [category, setCategory] = useState('all');

//   const filteredProducts = category === 'all' 
//     ? products 
//     : products.filter(product => product.category.includes(category));

//   const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

//   return (
//     <section id="shop" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
//       <div className="flex justify-between items-center mb-8 animate-slideInDown">
//         <h2 className="text-3xl font-bold text-black">Featured Products</h2>
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 hover-scale"
//         >
//           {showAll ? 'Show Less' : 'View All'}
//         </button>
//       </div>

//       {showAll && (
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => setCategory('all')}
//               className={`px-4 py-2 rounded-full transition-colors duration-300 ${
//                 category === 'all' 
//                   ? 'bg-indigo-600 text-white' 
//                   : 'bg-gray-200 hover:bg-gray-300'
//               }`}
//             >
//               All
//             </button>

//             <button
//               onClick={() => setCategory('men')}
//               className={`px-4 py-2 rounded-full transition-colors duration-300 ${
//                 category === 'men' 
//                   ? 'bg-indigo-600 text-white' 
//                   : 'bg-gray-200 hover:bg-gray-300'
//               }`}
//             >
//               Men
//             </button>
            
//             <button
//               onClick={() => setCategory('women')}
//               className={`px-4 py-2 rounded-full transition-colors duration-300 ${
//                 category === 'women' 
//                   ? 'bg-indigo-600 text-white' 
//                   : 'bg-gray-200 hover:bg-gray-300'
//               }`}
//             >
//               Women
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {displayProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

export function Products() {
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <section id="shop" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8 animate-slideInDown">
        <h2 className="text-3xl font-bold text-black">Featured Products</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 hover-scale"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      {showAll && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                category === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All
            </button>

            <button
              onClick={() => setCategory('men')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                category === 'men' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Men
            </button>
            
            <button
              onClick={() => setCategory('women')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                category === 'women' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Women
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}