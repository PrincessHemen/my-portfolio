import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purpleLight to-whiteLight dark:from-purpleDark dark:to-blackDark transition-all duration-500">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 text-center max-w-2xl text-lg">
        Hello! I'm Dooshima Hemen, a passionate front-end engineer with a love for creating stunning and responsive web applications. With a strong foundation in React, Tailwind CSS, and modern web technologies, I strive to build seamless user experiences.
      </p>
    </section>
  );
};

export default About;
