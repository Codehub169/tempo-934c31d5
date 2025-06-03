// Component imports will be added in future batches as they are developed.
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import WhyHueneuSection from './components/WhyHueneuSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen overflow-x-hidden selection:bg-hueneu-accent selection:text-hueneu-white">
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <WhyHueneuSection />
      <ContactSection />
    </main>
  );
}
