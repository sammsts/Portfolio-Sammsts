import './../../index.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';
import { Link } from 'react-router-dom';

function NavB({ isDarkMode, onDarkModeClick }) {

  const navbarStyle = {
    backgroundColor: isDarkMode ? 'rgb(48, 46, 46)' : '#ECE1EE',
    color: isDarkMode ? '#FFFFFF' : '#000000',
  };

  // const textNavBar = {
  //   color: isDarkMode ? '#FFFFFF' : '#000000',
  // }

  return (
    <div>
      <Navbar expand="lg" style={navbarStyle} variant={isDarkMode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand href="/" className='navbar-brand-typing'>
            <span>{"<  "}Samuel Maciel dos Santos{"  />"}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Navbar.Collapse className='justify-content-end basic-navbar-nav'>
          <Nav variant="underline" defaultActiveKey="/home" className="NavbarItems">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/about" className="nav-link" >About</Link>
            <Link to="/projects" className="nav-link" >Projects</Link>
          </Nav>
          <Nav>
            <BtnDarkMode isDarkMode={isDarkMode} onClick={onDarkModeClick} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavB;