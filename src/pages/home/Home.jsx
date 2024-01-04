import './../../index.css';
import 'react-tooltip/dist/react-tooltip.css'
import './style.css';
import { useState } from 'react';
import ImgProfile from './img/background-profile.png'
import { Tooltip } from 'react-tooltip'
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
      backgroundColor: isDarkMode ? '#000000' : '#A6A6A6',
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

  const styleIcon = {
    background: isDarkMode ? '' : 'rgba(0, 0, 0)',
    padding: '2px',
    borderRadius: '0px',
  };
  
    return (
      <div style={pageStyle}>
        <div style={containerProfileStyle} className="containerProfile">
          <div className="containerTextProfile">
            <h1 className={`titleProfile ${isMouseOver ? 'waveAnimation' : ''}`}>Hello.</h1>
            <p className={`textProfile ${isMouseOver ? 'waveAnimation' : ''}`}>I'm Samuel, and...</p>
            <p className={`textProfile ${isMouseOver ? 'waveAnimation' : ''}`}>I'm a Full Stack Developer!</p>
            <div>
              <AccordionHome isDarkMode={isDarkMode} />
            </div>
          </div>
          <div className="containerBackgroundProfile">
            <img src={ImgProfile} alt="Img Profile" className="img-profile" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
          </div>
        </div>
        
        {/* SKILLS - VOU UTILIZAR ISSO EM OUTRA TELA */}
        {/* <div className="containerSkills">
          <h2 className="titleSkills">Main Stack</h2>
          <hr />
          <div className="containerSkillsIcons">
            <i className="devicon-javascript-plain colored js-icon" data-tooltip-id="JavaScript" data-tooltip-content="JavaScript" style={styleIcon}></i>
            <Tooltip id="JavaScript" place="bottom" type="dark" effect="float" />

            <i className="devicon-nodejs-plain-wordmark colored nodejs-icon" data-tooltip-id="NodeJs" data-tooltip-content="Node.js"></i>
            <Tooltip id="NodeJs" place="bottom" type="dark" effect="float" />

            <i className="devicon-react-original-wordmark colored react-icon" data-tooltip-id="ReactJs" data-tooltip-content="React.js"></i>
            <Tooltip id="ReactJs" place="bottom" type="dark" effect="float" />

            <i className="devicon-git-plain-wordmark colored git-icon" data-tooltip-id="Git" data-tooltip-content="Git"></i>
            <Tooltip id="Git" place="bottom" type="dark" effect="float" />

            <i className={isDarkMode ? "devicon-github-original-wordmark github-icon" : "devicon-github-original-wordmark colored github-icon"} data-tooltip-id="Github" data-tooltip-content="Github"></i>
            <Tooltip id="Github" place="bottom" type="dark" effect="float" />

            <i className={isDarkMode ? "devicon-express-original-wordmark express-icon" : "devicon-express-original-wordmark colored express-icon"} data-tooltip-id="ExpressJs" data-tooltip-content="Express.js"></i>
            <Tooltip id="ExpressJs" place="bottom" type="dark" effect="float" />

            <i className="devicon-visualstudio-plain-wordmark colored vs-icon" data-tooltip-id="Vs" data-tooltip-content="Visual Studio"></i>
            <Tooltip id="Vs" place="bottom" type="dark" effect="float" />

            <i className="devicon-html5-plain-wordmark colored html-icon" data-tooltip-id="Html5" data-tooltip-content="Html5"></i>
            <Tooltip id="Html5" place="bottom" type="dark" effect="float" />

            <i className="devicon-css3-plain-wordmark colored css-icon" data-tooltip-id="Css" data-tooltip-content="Css3"></i>
            <Tooltip id="Css" place="bottom" type="dark" effect="float" />
          </div>
        </div>
        <div className="containerDatabases">
          <h2 className="titleDatabases">Databases</h2>
          <hr />
          <div className="containerDatabasesIcons">
            <i className="devicon-postgresql-plain-wordmark colored postgresql-icon" data-tooltip-id="PostgreSql" data-tooltip-content="PostgreSQL"></i>
            <Tooltip id="PostgreSql" place="bottom" type="dark" effect="float" />

            <i className="devicon-mysql-plain-wordmark colored mysql-icon" data-tooltip-id="MySql" data-tooltip-content="MySql"></i>
            <Tooltip id="MySql" place="bottom" type="dark" effect="float" />
          </div>
        </div>
        <div className="containerWorkstationTools">
          <h2 className="titleWorkstationTools">Workstation Tools</h2>
          <hr />
          <div className="containerWorkstationToolsIcons">
            <i className="devicon-ubuntu-plain-wordmark colored ubuntu-icon" data-tooltip-id="Ubuntu" data-tooltip-content="Ubuntu"></i>
            <Tooltip id="Ubuntu" place="bottom" type="dark" effect="float" />

            <i className="devicon-visualstudio-plain-wordmark colored vs2-icon" data-tooltip-id="Vs" data-tooltip-content="Visual Studio"></i>
            <Tooltip id="Vs" place="bottom" type="dark" effect="float" />

            <i className="devicon-vscode-plain-wordmark colored vsCode-icon" data-tooltip-id="VsCode" data-tooltip-content="Visual Studio Code"></i>
            <Tooltip id="VsCode" place="bottom" type="dark" effect="float" />

            <i className={isDarkMode ? "devicon-github-original-wordmark github2-icon" : "devicon-github-original-wordmark colored github2-icon"} data-tooltip-id="Github" data-tooltip-content="Github"></i>
            <Tooltip id="Github" place="bottom" type="dark" effect="float" />
          </div>
        </div> */}
      </div>
    );
  };
export default Home;