'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonials = [
    {
      name: "Tasnim Akter",
      location: "Pahartali, Chittagong",
      image: "/images/client1.jpg",
      rating: 5,
      text: "Mayra Clothing er t-shirt gula onek valo quality. DTF print o besh durable. Delivery o fast. Highly recommended!"
    },
    {
      name: "Rahim Khan",
      location: "Bandar Bazar, Sylhet",
      image: "/images/client2.jpg",
      rating: 5,
      text: "Shirt gulor design ekdom unique! Price o reasonable. Ar size perfect milse. Abar kinbo inshaAllah!"
    },
    {
      name: "Nusrat Jahan",
      location: "Kazla, Rajshahi",
      image: "/images/client3.jpg",
      rating: 4.5,
      text: "Product quality bhalo but delivery ekdin late hoise. Customer service valo, tara solve kore dise."
    },
    {
      name: "Farhan Ahmed",
      location: "Boikali, Khulna",
      image: "/images/client4.jpg",
      rating: 5,
      text: "DTF print er quality onek bhalo. Color fade hoy na. Comfortable to wear. Will buy again!"
    },
    {
      name: "Meherin Sultana",
      location: "Chowhatta, Barisal",
      image: "/images/client5.jpg",
      rating: 5,
      text: "Designs are very unique and trendy. Perfect for casual wear. Delivery was super fast!"
    },
    {
      name: "Imran Hossain",
      location: "Dhaleswari, Rangpur",
      image: "/images/client6.jpg",
      rating: 4.5,
      text: "Price is reasonable for the quality. Size chart is accurate. Happy with my purchase."
    },
    {
      name: "Tahmina Rahman",
      location: "Brahmaputra, Mymensingh",
      image: "/images/client7.jpg",
      rating: 5,
      text: "Love the fabric quality. Perfect for our weather. Customer service is excellent!"
    },
    {
      name: "Sakib Hasan",
      location: "Kandirpar, Comilla",
      image: "/images/client8.jpg",
      rating: 5,
      text: "Best t-shirts in Bangladesh. DTF print is amazing. Will recommend to friends!"
    },
    {
      name: "Nazia Akter",
      location: "Monirampur, Jessore",
      image: "/images/client9.jpg",
      rating: 4.5,
      text: "Very comfortable fabric. Design is unique. Perfect for everyday wear."
    },
    {
      name: "Rafiq Islam",
      location: "Fatullah, Narayanganj",
      image: "/images/client10.jpg",
      rating: 5,
      text: "Great quality at affordable price. Fast delivery. Will be a regular customer!"
    },
    {
      name: "Sharmin Akter",
      location: "Tongi, Gazipur",
      image: "/images/client11.jpg",
      rating: 5,
      text: "Love the collection. Perfect fit. Quality is excellent. Highly recommended!"
    },
    {
      name: "Salman Ahmed",
      location: "Mirpur DOHS, Dhaka",
      image: "/images/client12.jpg",
      rating: 5,
      text: "Mayra Clothing er product quality darun! Design gulo khub attractive. Ami khub satisfied."
    }
  ];

  const slidesPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
      }, 500);
    }, 9000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView;
    return testimonials.slice(start, start + slidesPerView);
  };

  return (
    <section id="testimonials" className="mx-[16px] sm:mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-18 max-w-6xl rounded-xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 mx-5 sm:mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#fffefe] animate-slideInDown">
        Customer Reviews
      </h2>
      <div className="relative overflow-hidden">
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
            isTransitioning ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-[250px] sm:h-[300px] flex flex-col justify-between transform hover:scale-105"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    quality={40}
                    loading="lazy"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}