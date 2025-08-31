import { HeroBanner } from '@/components/HeroBanner';
import { Categories } from '@/components/Categories';
import { Products } from '@/components/Products';
import { SeasonalBanner } from '@/components/SeasonalBanner';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Suspense, lazy } from 'react';
import { products } from '@/data/products'; // Import products here

// Lazy load heavy components
const LazyTestimonials = lazy(() => import('@/components/Testimonials').then(module => ({ default: module.Testimonials })));
const LazyNewsletter = lazy(() => import('@/components/Newsletter').then(module => ({ default: module.Newsletter })));

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Categories />
      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products} />
      </Suspense>
      <SeasonalBanner />
      <Suspense fallback={<div className="py-12 text-center">Loading testimonials...</div>}>
        <LazyTestimonials />
      </Suspense>
      <Suspense fallback={<div className="py-12 text-center">Loading newsletter...</div>}>
        <LazyNewsletter />
      </Suspense>
      <Footer />
    </main>
  );
}