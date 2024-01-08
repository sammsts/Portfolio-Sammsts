import './style.css';
import { Tooltip } from 'react-tooltip'

const About = ({ isDarkMode }) => {
    const pageStyle = {
        background: isDarkMode ? 'rgb(48, 46, 46)' : '#ECE1EE',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        transition: 'background-color 0.3s ease',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };

    const styleIcon = {
    background: isDarkMode ? '' : 'rgba(0, 0, 0)',
    padding: '2px',
    borderRadius: '0px',
    };

    return (
        <div style={pageStyle}>
            <div className="title-page">
                <div class="text">
                    <div class="wrapper">
                        <div id="F" class="letter">F</div>
                        <div class="shadow">F</div>
                    </div>
                    <div class="wrapper">
                        <div id="U" class="letter">U</div>
                        <div class="shadow">U</div>
                    </div>
                    <div class="wrapper">
                        <div id="L" class="letter">L</div>
                        <div class="shadow">L</div>
                    </div>
                    <div class="wrapper">
                        <div id="L" class="letter">L</div>
                        <div class="shadow">L</div>
                    </div>
                    <div class="wrapper">
                        <div id="" class="letter"></div>
                        <div class="shadow"></div>
                    </div>
                    <div class="wrapper">
                        <div id="S" class="letter">S</div>
                        <div class="shadow">S</div>
                    </div>
                    <div class="wrapper">
                        <div id="T" class="letter">T</div>
                        <div class="shadow">T</div>
                    </div>
                    <div class="wrapper">
                        <div id="A" class="letter">A</div>
                        <div class="shadow">A</div>
                    </div>
                    <div class="wrapper">
                        <div id="C" class="letter">C</div>
                        <div class="shadow">C</div>
                    </div>
                    <div class="wrapper">
                        <div id="K" class="letter">K</div>
                        <div class="shadow">K</div>
                    </div>
                    <div class="wrapper">
                        <div id="" class="letter"></div>
                        <div class="shadow"></div>
                    </div>
                    <div class="wrapper">
                        <div id="D" class="letter">D</div>
                        <div class="shadow">D</div>
                    </div>
                    <div class="wrapper">
                        <div id="E" class="letter">E</div>
                        <div class="shadow">E</div>
                    </div>
                    <div class="wrapper">
                        <div id="V" class="letter">V</div>
                        <div class="shadow">V</div>
                    </div>
                    <div class="wrapper">
                        <div id="E" class="letter">E</div>
                        <div class="shadow">E</div>
                    </div>
                    <div class="wrapper">
                        <div id="L" class="letter">L</div>
                        <div class="shadow">L</div>
                    </div>
                    <div class="wrapper">
                        <div id="O" class="letter">O</div>
                        <div class="shadow">O</div>
                    </div>
                    <div class="wrapper">
                        <div id="P" class="letter">P</div>
                        <div class="shadow">P</div>
                    </div>
                    <div class="wrapper">
                        <div id="E" class="letter">E</div>
                        <div class="shadow">E</div>
                    </div>
                    <div class="wrapper">
                        <div id="R" class="letter">R</div>
                        <div class="shadow">R</div>
                    </div>
                </div>
            </div>
            
            <div className="containerSkills">
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
            </div>
        </div>
    );
};

export default About;