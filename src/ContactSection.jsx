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
    url: 'https://github.com/yourusername',
    name: 'GitHub',
  },
  {
    icon: <FaDiscord className="text-indigo-500" />,
    url: 'https://discordapp.com/users/yourdiscordid',
    name: 'Discord',
  },
  {
    icon: <FaEnvelope className="text-red-500" />,
    url: 'mailto:youremail@example.com',
    name: 'Gmail',
  },
  {
    icon: <FaFacebook className="text-blue-600" />,
    url: 'https://facebook.com/yourprofile',
    name: 'Facebook',
  },
];

const ContactSection = () => {
  return (
    <section className="py-12 bg-blue-300 my-4 rounded-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#6A008A]">Contact Me</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-200 shadow hover:shadow-md transition transform hover:scale-110"
              title={contact.name}
            >
              <span className="text-2xl">{contact.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
