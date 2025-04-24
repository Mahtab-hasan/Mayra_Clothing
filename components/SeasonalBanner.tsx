import Image from 'next/image';

export function SeasonalBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 md:p-12 text-white animate-slideInUp">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale!</h2>
            <p className="text-lg mb-6">
              Up to 50% off on selected items. Limited time offer.
            </p>
            <a
              href="#all-products"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-block transform hover:scale-105"
            >
              Shop the Sale
            </a>
          </div>
          <div className="w-full md:w-1/3 relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3"
              alt="Summer Sale"
              fill
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}