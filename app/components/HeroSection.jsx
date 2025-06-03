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
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-hueneu-primary mb-3 md:mb-4 opacity-0 animate-fade-in-up [animation-delay:0.5s]"
      >
        Where stories find their aesthetic.
      </h1>

      {/* Subtext */}
      <p 
        className="text-lg sm:text-xl md:text-2xl font-sans text-hueneu-dark-gray max-w-xl md:max-w-2xl mx-auto mb-12 md:mb-16 opacity-0 animate-fade-in-up [animation-delay:1s]"
      >
        Designs that whisper loud stories.
      </p>

      {/* Scroll Down Indicator - positioned absolutely at the bottom center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
      
    </section>
  );
};

export default HeroSection;
