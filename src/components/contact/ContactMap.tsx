import React from "react";

const ContactMap = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md h-96">
      <iframe
        title="Office Location"
        className="w-full h-full"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1081835413867!2d-122.41941108509517!3d37.774929979758675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1655925404123!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap; 