// Footer.jsx
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6  rounded-t-2xl my-8">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-medium text-white">
          Building elegant digital website with a focus on user experience & technical excellence.
        </p>
        <p className="text-sm flex justify-center items-center gap-1 text-indigo-800">
          <FaRegCopyright />
          2025 Md. Mahmud Jamil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
