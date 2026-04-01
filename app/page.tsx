import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Services from '@/components/Services';
import B2BSection from '@/components/B2BSection';
import DocumentationGuide from '@/components/DocumentationGuide';
import CustomClearance from '@/components/CustomClearance';
import TradeRoutes from '@/components/TradeRoutes';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-white relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <B2BSection />
      <DocumentationGuide />
      <CustomClearance />
      <TradeRoutes />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
