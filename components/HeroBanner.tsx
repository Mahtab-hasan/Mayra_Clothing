// 'use client';

// export function HeroBanner() {
//   return (
//     <div className="relative h-[80vh] w-full overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/images/Bold Retro Fashion Blog Style Review Blog Banner.mp4" type="video/mp4" />
//       </video>
      
//       <div className="absolute inset-0 bg-black/40" />
      
//       <div className="absolute inset-0 flex items-center justify-center mt-[16%]">
//         <div className="text-center px-4 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide animate-fadeIn">
//             <span className="gradient-text">Discover Your Style With</span>
//             <span className="block mt-2 text-5xl gradient-text">
//               Mayra Clothing
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl mb-8 text-white/80 font-light max-w-2xl mx-auto animate-slideUp gradient-text">
//             Premium DTF Printed T-Shirts & Fashion Wear in Bangladesh
//           </p>
//           <div className="flex justify-center gap-4 animate-fadeIn">
//             <a 
//               href="#shop" 
//               className="shop-now-button"
//             >
//               Shop Now
//             </a>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';

export function HeroBanner() {
  return (
    <div className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/Bold Retro Fashion Blog Style Review Blog Banner.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center mt-[10%] sm:mt-[16%] px-4">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-wide animate-fadeIn">
            <span className="gradient-text text-2xl sm:text-4xl">Discover Your Style With</span>
            <span className="block mt-1 sm:mt-2 text-3xl sm:text-5xl gradient-text">
              Mayra Clothing
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