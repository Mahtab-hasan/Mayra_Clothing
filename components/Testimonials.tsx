'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonials = [
    {
      name: "Tasnim Akter",
      location: "Mirpur, Dhaka",
      image: "https://i.imgur.com/J5Z9Q0x.jpg",
      rating: 5,
      text: "Mayra Clothing er t-shirt gula onek valo quality. DTF print o besh durable. Delivery o fast. Highly recommended!"
    },
    {
      name: "Rahim Khan",
      location: "Chittagong",
      image: "https://i.imgur.com/8Km9t0d.jpg",
      rating: 5,
      text: "Shirt gulor design ekdom unique! Price o reasonable. Ar size perfect milse. Abar kinbo inshaAllah!"
    },
    {
      name: "Nusrat Jahan",
      location: "Sylhet",
      image: "https://i.imgur.com/3QmZ0Yk.jpg",
      rating: 4.5,
      text: "Product quality bhalo but delivery ekdin late hoise. Customer service valo, tara solve kore dise."
    },
    {
      name: "Farhan Ahmed",
      location: "Gulshan, Dhaka",
      image: "https://i.imgur.com/4QmZ0Yk.jpg",
      rating: 5,
      text: "DTF print er quality onek bhalo. Color fade hoy na. Comfortable to wear. Will buy again!"
    },
    {
      name: "Meherin Sultana",
      location: "Uttara, Dhaka",
      image: "https://i.imgur.com/5QmZ0Yk.jpg",
      rating: 5,
      text: "Designs are very unique and trendy. Perfect for casual wear. Delivery was super fast!"
    },
    {
      name: "Imran Hossain",
      location: "Banani, Dhaka",
      image: "https://i.imgur.com/6QmZ0Yk.jpg",
      rating: 4.5,
      text: "Price is reasonable for the quality. Size chart is accurate. Happy with my purchase."
    },
    {
      name: "Tahmina Rahman",
      location: "Dhanmondi, Dhaka",
      image: "https://i.imgur.com/7QmZ0Yk.jpg",
      rating: 5,
      text: "Love the fabric quality. Perfect for our weather. Customer service is excellent!"
    },
    {
      name: "Sakib Hasan",
      location: "Mohammadpur, Dhaka",
      image: "https://i.imgur.com/8QmZ0Yk.jpg",
      rating: 5,
      text: "Best t-shirts in Bangladesh. DTF print is amazing. Will recommend to friends!"
    },
    {
      name: "Nazia Akter",
      location: "Bashundhara, Dhaka",
      image: "https://i.imgur.com/9QmZ0Yk.jpg",
      rating: 4.5,
      text: "Very comfortable fabric. Design is unique. Perfect for everyday wear."
    },
    {
      name: "Rafiq Islam",
      location: "Motijheel, Dhaka",
      image: "https://i.imgur.com/10QmZ0Yk.jpg",
      rating: 5,
      text: "Great quality at affordable price. Fast delivery. Will be a regular customer!"
    },
    {
      name: "Sharmin Akter",
      location: "Farmgate, Dhaka",
      image: "https://i.imgur.com/11QmZ0Yk.jpg",
      rating: 5,
      text: "Love the collection. Perfect fit. Quality is excellent. Highly recommended!"
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
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView;
    return testimonials.slice(start, start + slidesPerView);
  };

  return (
    <section id="testimonials" className="py-8 px-4 sm:py-12 sm:px-6 lg:px-18 max-w-6xl rounded-xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-500">
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
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-[300px] flex flex-col justify-between transform hover:scale-105"
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