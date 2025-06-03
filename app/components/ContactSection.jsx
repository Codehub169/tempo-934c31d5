import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-hueneu-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="contact-form-heading-main" className="text-4xl md:text-5xl font-poppins text-hueneu-primary mb-4">
            Let's design your story.
          </h2>
          <p className="text-lg md:text-xl text-hueneu-dark-gray max-w-2xl mx-auto font-sans">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;