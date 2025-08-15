// Footer.jsx
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 rounded-t-2xl my-8">
      <div className="container mx-auto px-4 text-center space-y-4 sm:space-y-2">
        
        {/* Description */}
        <p className="text-base sm:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
          Building elegant digital websites with a focus on user experience & technical excellence.
        </p>

        {/* Copyright */}
        <p className="text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-indigo-800">
          <FaRegCopyright className="text-sm sm:text-base" />
          <span>2025 Md. Mahmud Jamil. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
