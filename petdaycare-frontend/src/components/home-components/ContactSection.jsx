import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-lg text-purple-600 font-semibold">Get in Touch</p>
          <h2 className="text-4xl font-bold text-purple-900 mt-2">
            We'd love to hear from you!
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Whether you have a question, want to book a service, or just want to
            say hello — our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form className="bg-purple-50 p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-left space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-purple-800 mb-2">
                Visit Us
              </h4>
              <p className="text-gray-600">
                123 Pet Street, Furry Town, PA 45678
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-800 mb-2">
                Call Us
              </h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-800 mb-2">
                Email
              </h4>
              <p className="text-gray-600">hello@petparadise.com</p>
            </div>
            <div className="mt-8">
              <iframe
                title="Pet Paradise Location"
                src="https://maps.google.com/maps?q=central%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-xl border-2 border-purple-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
