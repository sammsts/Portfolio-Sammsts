import './index.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Projects from './pages/projects/Projects.jsx';
import NavB from './components/Navbar/Navbar.jsx';
import ModalContact from './components/ModalContact/ModalContact.jsx';
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

const RoutesApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const footerStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#A6A6A6',
    color: isDarkMode ? '#FFFFFF' : '#000000',
    transition: 'background-color 0.3s ease',
  };


  return (
    <BrowserRouter>
      <NavB isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} index />
        <Route path="about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="projects" element={<Projects isDarkMode={isDarkMode} />} />
      </Routes>
      <footer style={footerStyle}>
        <div className="outer-footer">
          <div className="containerFooter">
            <div className="name-footer">
              <p className="nameFooterText">© Samuel Maciel dos Santos</p>
            </div>
            <div className="contact-footer">
              <a href="https://www.linkedin.com/in/samuelmacielsantos/" target="_blank" rel="noopener noreferrer">
                {/* <i className="devicon-linkedin-plain iconsContact iconIn"></i> */}
                <i className="iconsContact"><FaLinkedin /></i>
              </a>
              <a href="https://github.com/sammsts" target="_blank" rel="noopener noreferrer">
                {/* <i className="devicon-github-original iconsContact"></i> */}
                <i className="iconsContact"><BiLogoGithub /></i>
              </a>
              <i className="iconsContact"><ModalContact /></i>
              <a href="mailto:samuelmacielsts@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="iconsContact"><CgMail /></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default RoutesApp;