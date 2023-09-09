import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-pink-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">Feel free to reach out to us via email or phone:</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="mailto:bloomingresources.ph@gmail.com"
            className="bg-pink-200 hover:bg-pink-300 text-black font-semibold px-4 py-2 rounded-full transition duration-300"
          >
            ✉️ bloomingresources.ph@gmail.com
          </a>
          <a
            href="tel:+639913690802"
            className="bg-pink-200 hover:bg-pink-300 text-black font-semibold px-4 py-2 rounded-full transition duration-300"
          >
            📞 09913690802
          </a>
          <a
            href="tel:+639058194027"
            className="bg-pink-200 hover:bg-pink-300 text-black font-semibold px-4 py-2 rounded-full transition duration-300"
          >
            📞 09058194027
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
