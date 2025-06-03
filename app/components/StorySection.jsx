'use client';

import React, { useEffect, useRef, useState } from 'react';

const StorySection = () => {
  const [whoKnewVisible, setWhoKnewVisible] = useState(false);
  const whoKnewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhoKnewVisible(true);
          // Optional: unobserve if animation only runs once
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (whoKnewRef.current) {
      observer.observe(whoKnewRef.current);
    }

    return () => {
      if (whoKnewRef.current) {
        observer.unobserve(whoKnewRef.current);
      }
    };
  }, []);

  return (
    <section id="story" className="py-20 md:py-32 bg-secondary/70 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8">
          The hueneu Story
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-neutral-dark text-lg leading-relaxed">
          <p>
            <span className="font-bold text-accent">hue</span> (n.) — a spectrum of creative color bursts, the vibrant spark of an idea, the unexpected detail that delights.
          </p>
          <p>
            <span className="font-bold text-primary/80">neu</span> (adj.) — a grounding neutrality, the calm canvas upon which stories unfold, the quiet confidence of intentional design.
          </p>
          <p className="pt-4">
            Together, they form <span className="font-heading text-xl text-primary">hueneu</span>: a space where vivid imagination meets thoughtful restraint. We believe in designs that whisper loud stories, balancing expressive hues with serene neutrality. It's about finding that perfect harmony, that quiet boldness that leaves a lasting impression.
          </p>
        </div>
      </div>

      {/* Who Knew? Element */}
      <div 
        ref={whoKnewRef}
        className="mt-16 md:mt-24 flex flex-col items-center justify-center select-none"
      >
        <div className="relative">
          <span 
            className={`font-heading text-5xl md:text-7xl text-accent transition-all duration-1000 ease-out ${
              whoKnewVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'
            }`}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Who
          </span>
          <span 
            className={`font-heading text-5xl md:text-7xl text-primary transition-all duration-1000 ease-out delay-300 ${
              whoKnewVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
            }`}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Knew?
          </span>
          <span 
            className={`absolute -bottom-4 -right-8 text-3xl md:text-4xl transition-all duration-700 ease-in-out delay-700 ${
              whoKnewVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-5 rotate-12'
            }`}
          >
            ✨
          </span>
        </div>
        <p 
            className={`mt-4 text-neutral-dark font-sans transition-opacity duration-1000 delay-1000 ${
                whoKnewVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            (That quiet ideas could be so evocative?)
        </p>
      </div>
    </section>
  );
};

export default StorySection;
