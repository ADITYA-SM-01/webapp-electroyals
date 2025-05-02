import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const ContactPage = () => {
  return (
    <SpaceThemeLayout
      title="Contact Us | ELECTROYALS"
      description="Establish communication with our interstellar team for inquiries, collaborations, or to discuss your cosmic project needs."
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Contact</span> Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="mt-16">
          <ContactMap />
        </div>
      </div>
    </SpaceThemeLayout>
  );
};

export default ContactPage; 