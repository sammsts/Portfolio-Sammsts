import './../../index.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavB({ isDarkMode, onDarkModeClick }) {

  const navbarStyle = {
    backgroundColor: '#483D8B',
    color: '#FFFFFF',
    display: 'flex',
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={navbarStyle}>
        <Container>
          <Navbar.Brand href="/" className='navbar-brand-typing'>
            <span className="titleNavbar">{"<"}Samuel Maciel dos Santos{"/>"}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="underline" defaultActiveKey="/home">
              <Link to="/" className="nav-link">Home</Link>
              {/* <Link to="/about" className="nav-link">About</Link>
              <Link to="/projects" className="nav-link">Projects</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse className='justify-content-end'>
          {/* <BtnDarkMode isDarkMode={isDarkMode} onClick={onDarkModeClick} /> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavB;