import React from "react";

const ContactMap = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md h-96">
      <iframe
        title="Office Location"
        className="w-full h-full"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943428.6045796977!2d76.68722225!3d10.2828327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559a96427909a45d!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1655925404123!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap; 