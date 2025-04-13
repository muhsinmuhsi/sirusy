import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Logo / Text */}
        <div className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} Bubyku. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-pink-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-sky-500 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-blue-700 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
