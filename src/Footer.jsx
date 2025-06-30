// Footer.jsx
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-6 my-4">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-medium text-white">
          Brand your institute with this top developer.
        </p>
        <p className="text-sm flex justify-center items-center gap-1 text-gray-400">
          <FaRegCopyright />
          2025 Md. Mahmud Jamil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
