import './style.css';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const validFields = fieldsIsValid();

            if (validFields) {
                const options = {
                    publicKey: process.env.REACT_APP_EMAILJS_PUBLICKEY,
                    blockHeadless: true,
                    limitRate: {
                        id: 'app',
                        throttle: 10000,
                    },
                }

                const templateParams = {
                    from_name: formData.name,
                    email: formData.email,
                    message: formData.message
                }

                emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, options).then(
                    (response) => {
                        setFormData({
                            name: '',
                            email: '',
                            message: ''
                        });

                        document.querySelectorAll('input').forEach((inputElement) => {
                            inputElement.value = '';
                        });

                        document.querySelector('#Mensagem').value = ''
                    },
                    (error) => {
                        console.error('FAILED...', error);
                    },
                );
            } else {
                console.error('CAMPOS FAILED...');
            }
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
        }
    };

    const fieldsIsValid = () => {
        let valid = true;

        for (let errorText of document.querySelector('.form').querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of document.querySelector('.form').querySelectorAll('.validation')) {
            const label = campo.name;
            let labelText;

            switch (label) {
                case 'name':
                    labelText = 'Nome';
                    break;
                case 'email':
                    labelText = 'Email';
                    break;
                case 'message':
                    labelText = 'Mensagem';
                    break;
                default:
                    labelText = label;
            }

            if (!campo.value) {
                createError(campo, `campo "${labelText}" não pode estar vazio.`)
                valid = false;
            }
        }

        return valid;
    };

    const createError = (campo, msg) => {
        const div = document.createElement('div');

        div.innerHTML = msg;
        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div);
    }

    return (
        <div className="form-container">
            <form action="#" method="POST" onSubmit={handleSubmit} onChange={handleChange} className="form">
                <span className="heading">Mande uma mensagem</span>
                <input id="Nome" name="name" placeholder="Nome" type="text" className="input validation" />
                <input id="Email" name="email" placeholder="Email" type="email" className="input validation" />
                <textarea id="Mensagem" name="message" placeholder="Diga olá" rows="10" cols="30" className="textarea validation"></textarea>
                <div className="button-container hover:cursor-pointer">
                    <button type="submit" className="send-button">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;