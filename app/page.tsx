import { HeroBanner } from '@/components/HeroBanner';
import { Categories } from '@/components/Categories';
import { Products } from '@/components/Products';
import { SeasonalBanner } from '@/components/SeasonalBanner';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Categories />
      <Products />
      <SeasonalBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}