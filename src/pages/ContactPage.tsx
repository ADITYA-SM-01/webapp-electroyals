import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | ELECTROYALS</title>
        <meta name="description" content="Get in touch with our team for inquiries, collaborations, or to discuss your project needs." />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="mt-16">
          <ContactMap />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage; 