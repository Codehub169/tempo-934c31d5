'use client';

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility to allow hero content to animate in first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={[
        'w-8 h-12 md:w-10 md:h-14',
        'transition-opacity duration-1000 ease-in',
        isVisible ? 'opacity-100' : 'opacity-0'
      ].join(' ')}
      aria-hidden="true" // Decorative element
    >
      {/* Simple animated arrow using SVG and Tailwind animation */}
      {/* The animation is a subtle bounce */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-full h-full text-primary animate-bounce"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
