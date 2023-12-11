import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Projects from './pages/projects/Projects.jsx';
import NavB from './components/Navbar/Navbar.jsx';

const RoutesApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <BrowserRouter>
      <NavB isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} index />
        <Route path="about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="projects" element={<Projects isDarkMode={isDarkMode} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;