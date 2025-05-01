import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Lock, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/SirucyPng.png"

const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 shadow-inner">
       <div className="bg-white text-center p-6 text-sm relative">
      {/* Logo */}
      <div className='flex justify-center'>
        <img src={Logo} alt=""  className='w-64'/>
      </div>
      

      {/* Address Section */}
      <div className="mb-6">
        <p className="font-semibold">Address:</p>
        <p>Calicut airport road,Kottappuram,Malappuram,kerala,673637</p>
        <p className="mt-2 font-medium text-gray-700">If you need any help, please contact us</p>
        <p className="mt-1">
          <span className="font-semibold">Phone :</span> +91 -7994702022
        </p>
        <p>
          <span className="font-semibold">Email :</span> Sirusyz@gmail.com
        </p>
      </div>

      {/* Useful Links */}
      <div className="mb-6">
        <h2 className="text-base font-semibold mb-2">Useful Links</h2>
        <ul className="space-y-1 text-gray-700">
          <li><a href="">About us</a></li>
          <li onClick={()=>navigate('/Privacy-Policy')}><a href="">Privacy Policy</a></li>
          <li>Terms and Conditions</li>
          <li>Refund & Return Policy</li>
        </ul>
      </div>

      {/* Offer Section */}
      <div className="mb-6">
        <h2 className="text-base font-semibold mb-2">We Offer</h2>
        <p>
          <span className="font-bold">Free Shipping</span> on All Products with
          <br />
          <span className="font-bold">Secure</span> Payments, Hassle-Free Shopping!
        </p>
      </div>

      {/* Rating & WhatsApp */}
      <div className="flex items-center justify-between px-6 mt-4">
        <div className="flex items-center gap-1">
          <span className="text-orange-500 font-semibold text-xl">4.8</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange-500 text-xl">★</span>
            ))}
          </div>
          <span className="text-gray-800 ml-1">Google</span>
        </div>

      </div>
    </div>



      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Logo / Text */}
        <div className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} Sirusy.com All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61572402939191" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-blue-600 transition" />
          </a>
          <a href="https://www.instagram.com/siru.sy/?__pwa=1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-pink-500 transition" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Youtube className="h-5 w-5 hover:text-blue-700 transition" />
          </a>
          <button onClick={()=>navigate('/admin/Login')}><Lock size={15}/></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
