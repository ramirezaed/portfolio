import { useState } from 'react';
import '../styles/contact.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario, 
        // por ejemplo, utilizando un servicio de correo o un backend.
        console.log('Correo enviado:', formData);
        alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
        setFormData({ email: '', message: '' }); // Limpiar el formulario después de enviarlo
    };

    return (
        <div className="contact-form-container">
            <h2>Contáctame</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </div>
    );
};

export default ContactForm;
