import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-whiteLight dark:bg-blackDark text-black dark:text-white min-h-screen flex flex-col transition-all duration-500">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <main className="flex-grow">
          <Home />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
