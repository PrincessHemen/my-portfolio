import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purpleLight dark:bg-purpleDark text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/princess-hemen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin size={30} className="hover:text-blue-700" />
          </a>
          <a
            href="https://github.com/PrincessHemen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            <FaGithub size={30} className="hover:text-black" />
          </a>
          <a
            href="https://t.me/p_d_hemen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaTelegram size={30} className="hover:text-blue-500" />
          </a>
        </div>
        <div>
          Made with <span className="text-red-500">❤️</span> and <span className="text-yellow-500">🍪</span> by Dooshima
        </div>
        <div>&copy; 2024 by Dooshima Hemen. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
