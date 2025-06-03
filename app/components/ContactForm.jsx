'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMessage(result.message || 'Your message has been sent!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('error');
        setResponseMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-xl mx-auto p-8 md:p-10 bg-secondary/50 shadow-lg rounded-lg border border-neutral-light/30 backdrop-blur-sm"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="text-3xl font-heading text-primary mb-8 text-center">Let's design your story</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/70 border border-neutral-light/50 rounded-md shadow-sm placeholder-neutral focus:ring-accent focus:border-accent focus:outline-none transition-colors duration-300 text-neutral-dark"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/70 border border-neutral-light/50 rounded-md shadow-sm placeholder-neutral focus:ring-accent focus:border-accent focus:outline-none transition-colors duration-300 text-neutral-dark"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/70 border border-neutral-light/50 rounded-md shadow-sm placeholder-neutral focus:ring-accent focus:border-accent focus:outline-none transition-colors duration-300 text-neutral-dark"
            placeholder="What's your story about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/70 border border-neutral-light/50 rounded-md shadow-sm placeholder-neutral focus:ring-accent focus:border-accent focus:outline-none transition-colors duration-300 text-neutral-dark resize-none"
            placeholder="Tell us a bit about your project or idea..."
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-3 bg-accent text-white font-medium rounded-md shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Your Note'}
        </button>
      </div>

      {responseMessage && (
        <p className={`mt-6 text-center text-sm ${status === 'success' ? 'text-success-dark' : 'text-error-dark'}`}>
          {responseMessage}
        </p>
      )}
      <p className="mt-8 text-center text-sm text-neutral-dark">
        Or find us on Instagram: <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@hueneu_</a>
      </p>
    </form>
  );
};

export default ContactForm;
