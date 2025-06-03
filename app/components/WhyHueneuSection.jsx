'use client';

import React, { useEffect, useRef, useState } from 'react';

const poeticLines = [
  "We don’t just design—we decode stories.",
  "Each pixel, a pause. Each color, a conversation.",
  "In the quiet spaces, your narrative finds its voice.",
  "Designs that speak softly, yet resonate deeply.",
  "Balancing mystery with clarity, calm with a spark.",
  "This is hueneu. This is design that stays with you."
];

const WhyHueneuSection = () => {
  const sectionRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          poeticLines.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLines((prev) => prev + 1);
            }, index * 700); // Staggered appearance
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-hueneu" className="py-20 md:py-32 bg-primary/5">
      <div ref={sectionRef} className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-12 md:mb-16">
          Why hueneu?
        </h2>
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
          {poeticLines.map((line, index) => (
            <p 
              key={index} 
              className={`font-sans text-xl md:text-2xl text-neutral-dark leading-relaxed transition-all duration-1000 ease-in-out ${
                index < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // slight additional delay for smoothness
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
