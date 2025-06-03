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
      console.error('Form submission error:', error);
      setStatus('error');
      setResponseMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-xl mx-auto bg-hueneu-white p-8 md:p-10 shadow-xl rounded-lg border border-hueneu-light-gray/50"
      aria-labelledby="contact-form-heading-main" // Assuming ContactSection provides the main heading
    >
      {/* The heading "Let's design your story" is expected to be part of the parent ContactSection */}
      {/* This form component focuses solely on the form fields and submission logic */}
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-hueneu-dark-gray mb-1 font-inter">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-hueneu-secondary/30 border border-hueneu-light-gray/70 rounded-md shadow-sm placeholder-hueneu-primary/70 focus:ring-hueneu-accent focus:border-hueneu-accent focus:outline-none transition-colors duration-300 text-hueneu-dark-gray font-inter"
            placeholder="Your Name"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-hueneu-dark-gray mb-1 font-inter">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-hueneu-secondary/30 border border-hueneu-light-gray/70 rounded-md shadow-sm placeholder-hueneu-primary/70 focus:ring-hueneu-accent focus:border-hueneu-accent focus:outline-none transition-colors duration-300 text-hueneu-dark-gray font-inter"
            placeholder="your.email@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-hueneu-dark-gray mb-1 font-inter">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-hueneu-secondary/30 border border-hueneu-light-gray/70 rounded-md shadow-sm placeholder-hueneu-primary/70 focus:ring-hueneu-accent focus:border-hueneu-accent focus:outline-none transition-colors duration-300 text-hueneu-dark-gray font-inter"
            placeholder="What's your story about?"
            autoComplete="off" 
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-hueneu-dark-gray mb-1 font-inter">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-hueneu-secondary/30 border border-hueneu-light-gray/70 rounded-md shadow-sm placeholder-hueneu-primary/70 focus:ring-hueneu-accent focus:border-hueneu-accent focus:outline-none transition-colors duration-300 text-hueneu-dark-gray font-inter resize-none"
            placeholder="Tell us a bit about your project or idea..."
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-3.5 bg-hueneu-accent text-hueneu-white font-poppins font-medium rounded-md shadow-md hover:bg-opacity-85 focus:outline-none focus:ring-2 focus:ring-hueneu-accent focus:ring-offset-2 focus:ring-offset-hueneu-white transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Your Note'}
        </button>
      </div>

      {responseMessage && (
        <p className={`mt-6 text-center text-sm font-inter ${status === 'success' ? 'text-hueneu-success' : 'text-hueneu-error'}`}>
          {responseMessage}
        </p>
      )}
      <p className="mt-8 text-center text-sm text-hueneu-dark-gray/80 font-inter">
        Or find us on Instagram: <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="text-hueneu-accent hover:underline font-medium">@hueneu_</a>
      </p>
    </form>
  );
};

export default ContactForm;
