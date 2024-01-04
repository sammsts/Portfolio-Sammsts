import '../../index.css';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import AlertWarning from "../AlertWarning/AlertWarning.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'react-whatsapp-widget/dist/index.css';

function ModalContact({ isDarkMode }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };

  const handleShow = () => setShow(true);

  const handleSendWhatsAppMessage = () => {
    if (!name || !message) {
      setShowAlert(true);
      return;
    }

    const nameSender = document.getElementById('sender').value;
    const messageText = document.getElementById('messageText').value;

    const whatsAppMessage = `Hello, Samuel:\n\nName: ${nameSender}\nMessage: ${messageText}`;

    const phoneNumber = '5555999277813';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

    window.open(whatsappLink);
  };

  const modalStyle = {
    backgroundColor: '#A6A6A6',
    color: isDarkMode ? '#FFFFFF' : '#000000',
    transition: 'background-color 0.3s ease',
};

  return (
    <>
      <FaWhatsapp className="iconsContact" onClick={handleShow}></FaWhatsapp>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && <AlertWarning alertText={'Por favor, preencha todos os campos.'} />}
          <Form>
            <Form.Group className="mb-3" controlId="sender">
              <Form.Label>Your Name (required)</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="messageText"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendWhatsAppMessage}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalContact;