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
        'service_4effscv',      // Replace with your actual EmailJS service ID
        'template_385cd5o',     // Replace with your actual EmailJS template ID
        form.current,
        'thAXMzBTeejotS4jJ'       // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id='contact' className="py-12  my-6 rounded-2xl">
      <div data-aos="zoom-out-down" className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6  ">Message Me</h2>
        <form ref={form} onSubmit={sendEmail} className="border-2 border-blue-500 shadow-md rounded-lg p-6 space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className=" btn border-2 border-blue-500 font-bold px-6 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-center text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default MessageForm;
