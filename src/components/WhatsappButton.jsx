import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const FloatingWhatsAppButton = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <a
      href="https://wa.me/7994702022"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      data-aos="fade-left"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default FloatingWhatsAppButton;
