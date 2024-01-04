import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

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

function AccordionHome({ isDarkMode }) {
  return (
    <Accordion defaultActiveKey="0">
      <Card data-bs-theme={`${isDarkMode ? "dark" : "light"}`}>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0" style={{ maxWidth: '40vw', }}>
          <Card.Body>Hello! This is my portfolio, here you will find a little about me, including my professional history, so... Welcome 🤗.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordionHome;