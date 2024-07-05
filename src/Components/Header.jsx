import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ setDarkMode, darkMode }) => {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="sticky top-0 bg-purpleLight dark:bg-purpleDark shadow-md transition-all duration-500">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Dooshima Hemen</div>
        <ul className="flex space-x-4">
          {['home', 'about', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <Link 
                to={section} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:underline"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleDarkMode} className="ml-4">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
