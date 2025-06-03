'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Branding',
    description: 'Logos that breathe, identities that resonate.',
    icon: '/icons/service-icon-branding.svg',
  },
  {
    title: 'Packaging',
    description: 'Packaging, but make it poetic.',
    icon: '/icons/service-icon-packaging.svg',
  },
  {
    title: 'Social Media',
    description: 'Scroll-stopping stories for your digital stage.',
    icon: '/icons/service-icon-social-media.svg',
  },
  {
    title: 'Stationery',
    description: 'Tactile tales on paper, beautifully told.',
    icon: '/icons/service-icon-stationery.svg', // Placeholder - will be created in next batch
  },
  {
    title: 'Coffee Table Books',
    description: 'Curating legacies, one beautiful page at a time.',
    icon: '/icons/service-icon-books.svg', // Placeholder - will be created in next batch
  },
  {
    title: 'Creative Projects',
    description: 'Your wildest ideas, designed with intention.',
    icon: '/icons/service-icon-creative.svg', // Placeholder - will be created in next batch
  },
];

const ServiceCard = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (entry.target) {
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
    >
      <div className="relative w-16 h-16 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
        <Image src={icon} alt={`${title} icon`} fill objectFit="contain" />
      </div>
      <h3 className="text-2xl font-poppins text-hueneu-primary mb-3 text-center">{title}</h3>
      <p className="text-hueneu-dark-gray text-center font-sans text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-hueneu-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-poppins text-hueneu-primary mb-6">
          What We Do
        </h2>
        <p className="text-lg md:text-xl text-hueneu-dark-gray mb-16 max-w-2xl mx-auto font-sans">
          We craft visual narratives that captivate and connect. Each design is a quiet conversation, an aesthetic echo of your story.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
