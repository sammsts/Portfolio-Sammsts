import './style.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink', color: 'black' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function AccordionHome({ isDarkMode, isMouseOver }) {
  return (
    <Accordion defaultActiveKey="0" className={`accordionResponsive ${isMouseOver ? 'waveAnimation' : ''}`}>
      <Card data-bs-theme={`${isDarkMode ? "dark" : "light"}`}>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0" className="accordionResponsiveCollapse">
          <Card.Body>Hello! This is my portfolio, here you will find a little about me, including my professional history, so... Welcome 🤗.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordionHome;