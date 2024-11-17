import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_p60raiw", // Your service ID
        "template_hjlvl6z", // Your template ID
        e.target, // Form element
        "MvvV9LXfK1-grW4F0" // Your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormSubmitted(true);
          setShowModal(true);
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id="contact" className="contact-container">
      <section className="py-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-red-400">Contact</span> Me
          </h2>

          {/* Contact Info Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* Phone */}
            <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform duration-300">
              <a href="tel:9429468900" className="cursor-pointer">
                <div className="bg-blue-500 p-4 rounded-full transform transition duration-300 hover:scale-125 hover:shadow-[0_4px_20px_4px_rgba(59,130,246,0.8)]">
                  <FaPhoneAlt size={30} className="text-white" />
                </div>
              </a>
              <p className="mt-4 font-semibold">Phone:</p>
              <p>+91 94294 68900</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform duration-300">
              <a
                href="mailto:jay1904prajapati@gmail.com"
                className="cursor-pointer"
              >
                <div className="bg-green-500 p-4 rounded-full transform transition duration-300 hover:scale-125 hover:shadow-[0_4px_20px_4px_rgba(34,197,94,0.8)]">
                  <FaEnvelope size={30} className="text-white" />
                </div>
              </a>
              <p className="mt-4 font-semibold">Email:</p>
              <p>jay1904prajapati@gmail.com</p>
            </div>

            {/* City */}
            <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform duration-300">
              <div className="bg-purple-600 p-4 rounded-full transform transition duration-300 hover:scale-125 hover:shadow-[0_4px_20px_4px_rgba(120,71,239,0.8)]">
                <FaMapMarkerAlt size={30} className="text-white" />
              </div>
              <p className="mt-4 font-semibold">City:</p>
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              <span className="text-yellow-500">Get</span> in{" "}
              <span className="text-pink-500">Touch</span>
            </h3>
            <form
              className="max-w-lg mx-auto space-y-4"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-3 rounded bg-gray-800 border ${
                  formErrors.name ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`w-full p-3 rounded bg-gray-800 border ${
                  formErrors.email ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className={`w-full p-3 rounded bg-gray-800 border ${
                  formErrors.subject ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              {formErrors.subject && (
                <p className="text-red-500 text-sm">{formErrors.subject}</p>
              )}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className={`w-full p-3 rounded bg-gray-800 border ${
                  formErrors.message ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded shadow-lg hover:bg-opacity-90 focus:outline-none active:scale-110 transition duration-200 transform hover:shadow-xl hover:shadow-green-400"
              >
                SEND MESSAGE
              </button>

              {/* Thank You Message */}
              {formSubmitted && (
                <div className="mt-8 px-4 py-6 sm:px-8 sm:py-6 md:mt-10 md:px-12 md:py-8 lg:mt-12 lg:px-16 lg:py-10 text-xl font-semibold text-green-400 bg-green-900 bg-opacity-10 rounded-lg shadow-md">
                  <p className="text-center leading-relaxed">
                    Thank you for reaching out! Your message has been received.
                    I’ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
