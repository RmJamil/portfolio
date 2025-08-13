// ContactSection.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaFacebook } from 'react-icons/fa';

const contactLinks = [
  {
    icon: <FaLinkedin className="text-blue-700" />,
    url: 'https://www.linkedin.com/in/yourprofile',
    name: 'LinkedIn',
  },
  {
    icon: <FaGithub className="text-gray-800" />,
    url: 'https://github.com/rmJamil',
    name: 'GitHub',
  },
  {
    icon: <FaDiscord className="text-indigo-500" />,
    url: 'https://discord.com/channels/@me',
    name: 'Discord',
  },
  {
    icon: <FaEnvelope className="text-red-500" />,
    url: 'mailto:jamil.web.coder@gmail.com',
    name: 'Gmail',
  },
  {
    icon: <FaFacebook className="text-blue-600" />,
    url: 'https://www.facebook.com/jamil.raihan.14',
    name: 'Facebook',
  },
];

const ContactSection = () => {
  return (
    <section  className="py-4 bg-blue-300 my-4 rounded-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold  text-[#6A008A] mb-12">Social links</h2>
        <div className="flex justify-center flex-wrap mb-8 gap-6">
          {contactLinks.map((contact, index) => (
            <a data-aos="flip-right"
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-200 shadow hover:shadow-md transition transform hover:scale-110"
              title={contact.name}
            >
              <span className="text-3xl">{contact.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
