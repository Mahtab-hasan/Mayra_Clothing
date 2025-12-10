import Image from 'next/image';

export function SeasonalBanner() {
  return (
    <section id="about" className=" py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 md:p-12 text-white animate-slideInUp">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
            <p className="text-lg mb-6">
              Mayra Origin has been a proud pioneer in premium DTF printed apparel in Bangladesh since 2024. We are dedicated to offering our esteemed customers not just high-quality fashion, but an experience that seamlessly blends style, comfort, and exceptional durability, all at genuinely affordable prices.
            </p>
            <a
              href="#contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-block transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
          <div className="w-full md:w-1/2 relative h-72">
            <Image
              src="/images/bannar.jpg"
              alt="About Mayra Clothing"
              fill
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
              quality={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
}