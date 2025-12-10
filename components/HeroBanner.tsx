'use client';

import Image from 'next/image';

export function HeroBanner() {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] w-full overflow-hidden">
      {/* Show Image on All Devices */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/bannar.jpg"
          alt="Mayra Clothing Banner"
          fill
          className="object-cover"
          priority
          quality={50}
        />
      </div>
      
      {/* Medium and larger devices: Show Video */}
      {/* <div className="hidden md:block absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/bannar.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/images/Bold Retro Fashion Blog Style Review Blog Banner.mp4" type="video/mp4" />
        </video>
      </div> */}
      
      <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center mt-[20%] sm:mt-[16%] px-4">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-wide animate-fadeIn">
            <span className="gradient-text text-2xl sm:text-4xl">Discover Your Style With</span>
            <span className="block mt-1 sm:mt-2 text-3xl sm:text-5xl gradient-text">
              Mayra Origin
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/80 font-light max-w-2xl mx-auto animate-slideUp gradient-text">
            Premium DTF Printed T-Shirts & Fashion Wear in Bangladesh
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 animate-fadeIn">
            <a 
              href="#shop" 
              className="shop-now-button px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}