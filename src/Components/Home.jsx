import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/background-image.jpg)' }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center animate-fadeIn">
        <h1 className="text-5xl font-bold text-white font-serif">Welcome to My Portfolio</h1>
        <img
          src="/developer-picture.jpg"
          alt="Dooshima Hemen"
          className="rounded-full w-48 h-48 mt-4 mx-auto border-4 border-purpleLight dark:border-purpleDark"
        />
        <p className="mt-4 text-white font-sans">Front-End Engineer | Tech Enthusiast</p>
      </div>
    </section>
  );
};

export default Home;
