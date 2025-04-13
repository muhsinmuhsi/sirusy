import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from '../assets/sirusyLogo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <nav className="w-full bg-black shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="mt-1 h-8" />
        </div>

        {/* Middle - Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-400 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="text-gray-700 hover:text-pink-600" />
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white font-medium py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
