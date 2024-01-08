import './../../index.css';
import 'react-tooltip/dist/react-tooltip.css'
import './style.css';
import { useState } from 'react';
import ImgProfile from './img/background-profile.png'
import AccordionHome from '../../components/AccordionHome/AccordionHome.jsx';

const Home = ({ isDarkMode }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
      setIsMouseOver(false);
  };

  const pageStyle = {
      color: isDarkMode ? '#FFFFFF' : '#000000',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  };

  const containerProfileStyle = {
    background: isDarkMode
      ? 'rgb(48, 46, 46)'
      : '#ECE1EE',
    color: isDarkMode ? '#FFFFFF' : '#000000',
  };
  
    return (
      <div style={pageStyle}>
        <div style={containerProfileStyle} className="containerProfile">
          <div className="containerLeftItemsProfile">
            <div className="containerTextProfile">
              <h1 className={`titleProfile ${isMouseOver ? 'waveAnimation' : ''}`}>Hello.</h1>
              <p className={`textProfile ${isMouseOver ? 'waveAnimation' : ''}`}>I'm Samuel, and...</p>
              <p className={`textProfile ${isMouseOver ? 'waveAnimation' : ''}`}>I'm a Full Stack Developer!</p>
            </div>
            <div>
              <AccordionHome isDarkMode={isDarkMode} isMouseOver={isMouseOver} />
            </div>
          </div>
          <div className="containerBackgroundProfile">
            <img src={ImgProfile} alt="Img Profile" className="img-profile" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
          </div>
        </div>
      </div>
    );
  };
export default Home;