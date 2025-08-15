// MessageForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const MessageForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4effscv',      // Your EmailJS service ID
        'template_385cd5o',     // Your EmailJS template ID
        form.current,
        'thAXMzBTeejotS4jJ'     // Your EmailJS public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        () => {
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="mt-8 px-4 sm:px-6">
      <div
        data-aos="zoom-out-down"
        className="container mx-auto max-w-lg sm:max-w-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Message Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="border-2 border-blue-500 shadow-md rounded-lg p-4 sm:p-6 space-y-4 "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-2 sm:p-3 border rounded text-sm "
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-2 sm:p-3 border rounded text-sm "
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-2 sm:p-3 border rounded text-sm "
          />
          <button
            type="submit"
            className="w-full sm:w-auto border-2 border-blue-500 font-bold px-4 sm:px-6 py-2 hover:cursor-pointer rounded hover:bg-blue-500 hover:text-white transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-xs sm:text-sm text-center text-green-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default MessageForm;
