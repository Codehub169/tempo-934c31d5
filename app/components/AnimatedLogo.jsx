'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const AnimatedLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Short delay to ensure transition is applied
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-48 h-24 md:w-64 md:h-32 lg:w-72 lg:h-36">
      {/* This component assumes hueneu-logo-base.svg is in public/images/ */}
      {/* The animation is a fade-in and slight upward movement */}
      <Image
        src="/images/hueneu-logo-base.svg"
        alt="hueneu logo"
        fill
        priority
        className={[
          'object-contain',
          'transition-all duration-[1500ms] ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        ].join(' ')}
      />
    </div>
  );
};

export default AnimatedLogo;
