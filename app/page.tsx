import { HeroBanner } from '@/components/HeroBanner';
import { Categories } from '@/components/Categories';
import { Products } from '@/components/Products';
import { SeasonalBanner } from '@/components/SeasonalBanner';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Suspense } from 'react';
import { products } from '@/data/products'; // Import products here

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
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}