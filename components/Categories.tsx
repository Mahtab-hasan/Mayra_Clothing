import Image from 'next/image';

export function Categories() {
  return (
    <section id="categories" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 animate-slideInDown text-white">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Men's Category */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slideInLeft">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d"
              alt="Men's Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Men&apos;s Fashion</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-black mb-4">
              T-Shirts, Shirts, Pants & more for men with premium DTF printing
            </p>
            <div className="text-black font-semibold hover:text-gray-800 flex items-center transition-colors duration-300">
              Shop Men&apos;s
              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </div>
          </div>
        </div>

        {/* Women's Category */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slideInRight">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f"
              alt="Women's Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Women&apos;s Fashion</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-black mb-4">
              Trendy tops, dresses, and more for women with unique designs
            </p>
            <div className="text-black font-semibold hover:text-gray-800 flex items-center transition-colors duration-300">
              Shop Women&apos;s
              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}