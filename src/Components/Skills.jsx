import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-whiteLight to-purpleLight dark:from-blackDark dark:to-purpleDark transition-all duration-500">
      <h2 className="text-4xl font-bold font-serif">My Skills</h2>
      <div className="flex space-x-8 mt-6">
        <FaReact className="text-blue-500 hover:scale-110 transition-transform duration-300" size={80} />
        <SiTailwindcss className="text-teal-400 hover:scale-110 transition-transform duration-300" size={80} />
        <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform duration-300" size={80} />
        <FaCss3Alt className="text-blue-600 hover:scale-110 transition-transform duration-300" size={80} />
        <FaJsSquare className="text-yellow-500 hover:scale-110 transition-transform duration-300" size={80} />
      </div>
    </section>
  );
};

export default Skills;
