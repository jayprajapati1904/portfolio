import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded bg-gray-700 border-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded bg-gray-700 border-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded bg-gray-700 border-none"
          />
          <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
