'use client';

import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative text-center p-6 bg-hueneu-secondary text-hueneu-dark-gray overflow-hidden"
    >
      {/* Animated Logo Component */}
      <div className="mb-8 md:mb-10">
        <AnimatedLogo />
      </div>

      {/* Tagline */}
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-hueneu-primary mb-3 md:mb-4 opacity-0"
        style={{
          animationName: 'fadeInUp',
          animationDuration: '1000ms',
          animationTimingFunction: 'ease-in',
          animationDelay: '0.5s', 
          animationFillMode: 'forwards'
        }}
      >
        Where stories find their aesthetic.
      </h1>

      {/* Subtext */}
      <p 
        className="text-lg sm:text-xl md:text-2xl font-sans text-hueneu-dark-gray max-w-xl md:max-w-2xl mx-auto mb-12 md:mb-16 opacity-0"
        style={{
          animationName: 'fadeInUp',
          animationDuration: '1000ms',
          animationTimingFunction: 'ease-in',
          animationDelay: '1s', 
          animationFillMode: 'forwards'
        }}
      >
        Designs that whisper loud stories.
      </p>

      {/* Scroll Down Indicator - positioned absolutely at the bottom center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
      
      {/* CSS for fadeInUp animation - to be potentially moved to globals.css or tailwind.config.js if widely used */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
