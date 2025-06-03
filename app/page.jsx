// Component imports will be added in future batches as they are developed.
// e.g.:
// import HeroSection from './components/HeroSection';
// import StorySection from './components/StorySection';
// import ServicesSection from './components/ServicesSection';
// import WhyHueneuSection from './components/WhyHueneuSection';
// import ContactSection from './components/ContactSection'; // Might contain ContactForm

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen overflow-x-hidden selection:bg-accent selection:text-white">
      {/* 
        This page serves as the single-page application, with sections revealed on scroll.
        Actual components for each section will replace these placeholders.
        Styling uses Tailwind CSS utility classes and theme colors from tailwind.config.js.
      */}

      {/* Hero Section Placeholder */}
      <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-neutral-dark p-8 pt-20 md:pt-8 text-center">
        {/* AnimatedLogo component will be here */} 
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 font-poppins animate-logo-reveal">
          hueneu
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 font-inter animate-logo-reveal animation-delay-300">
          Where stories find their aesthetic.
        </p>
        <p className="text-md md:text-lg font-inter text-neutral-dark opacity-80 animate-logo-reveal animation-delay-500">
          Designs that whisper loud stories.
        </p>
        {/* ScrollIndicator component will be added here later */}
        <div className="absolute bottom-10 animate-scroll-indicate">
          {/* Placeholder for a more sophisticated SVG icon later */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* The hueneu Story Section Placeholder */}
      <section id="story" className="w-full min-h-screen flex items-center justify-center bg-primary text-neutral-white p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-poppins">The hueneu Story</h2>
          <p className="text-lg md:text-xl leading-relaxed font-inter mb-4">
            <strong>Hue</strong>: creative color bursts that ignite the imagination.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-inter mb-6">
            <strong>Neu</strong>: grounding neutrality that brings calm and clarity.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-inter italic">
            We weave these together, finding the perfect balance. Designs that feel both surprisingly fresh and deeply familiar. 
          </p>
          <p className="text-2xl md:text-3xl font-poppins font-medium mt-10 text-accent">
            (Who Knew? A delightful visual surprise awaits here!)
          </p>
        </div>
      </section>

      {/* What We Do Section Placeholder */}
      <section id="services" className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-white text-neutral-dark p-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16 font-poppins text-center">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {[ 
            { title: 'Branding', copy: 'Logos that live, identities that breathe.' },
            { title: 'Packaging', copy: 'Packaging, but make it poetic.' },
            { title: 'Social Media', copy: 'Scroll-stopping stories, beautifully told.' },
            { title: 'Stationery', copy: 'Tangible touches that tell your tale.' },
            { title: 'Coffee Table Books', copy: 'Curated narratives, bound to inspire.' },
            { title: 'Creative Projects', copy: 'Your unique vision, our design magic.' },
          ].map((service, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center">
              {/* Placeholder for icon */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-neutral-white font-poppins">{service.title.substring(0,1)}</span>
              </div>
              <h3 className="text-2xl font-poppins font-medium mb-2 text-neutral-dark">{service.title}</h3>
              <p className="font-inter text-neutral-dark opacity-80 leading-relaxed">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why hueneu? Section Placeholder */}
      <section id="why-hueneu" className="w-full min-h-screen flex items-center justify-center bg-primary text-neutral-white p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-poppins">Why hueneu?</h2>
          <p className="text-2xl md:text-3xl font-light mb-6 font-inter italic">
            “We don’t just design—we decode stories.”
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-inter">
            Designs that speak quietly but stay with you. We embrace the calm, explore the mystery, and strike the perfect balance to make your narrative unforgettable. We believe in design that feels personal, intentional, and always evocative.
          </p>
        </div>
      </section>

      {/* Let’s Work Together Section Placeholder */}
      <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-neutral-dark p-8 py-16 md:py-24">
        <div className="text-center w-full max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-poppins">Let’s Work Together</h2>
          <div className="bg-neutral-white p-8 md:p-12 rounded-xl shadow-2xl w-full">
            <p className="font-inter mb-8 text-lg text-neutral-dark opacity-90 leading-relaxed">
              Have a story waiting to be told? Or perhaps a vision that needs its unique hue and grounding neu?
              Drop us a line. We're excited to hear from you and explore how we can design your narrative.
            </p>
            {/* ContactForm component will be implemented here later */}
            <form className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark font-inter mb-1">Full Name</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full px-4 py-3 border border-neutral-light rounded-md shadow-sm focus:ring-2 focus:ring-accent focus:border-accent font-inter transition-colors duration-200" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark font-inter mb-1">Email Address</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full px-4 py-3 border border-neutral-light rounded-md shadow-sm focus:ring-2 focus:ring-accent focus:border-accent font-inter transition-colors duration-200" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark font-inter mb-1">Your Message</label>
                <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-4 py-3 border border-neutral-light rounded-md shadow-sm focus:ring-2 focus:ring-accent focus:border-accent font-inter transition-colors duration-200" placeholder="Tell us about your project, your ideas, or just say hello..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-neutral-white bg-accent hover:bg-opacity-85 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 ease-in-out font-poppins transform hover:scale-105">
                  Let’s design your story
                </button>
              </div>
            </form>
            <p className="mt-10 text-center font-inter text-neutral-dark opacity-80">
              Or find us on Instagram: <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">@hueneu_</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
