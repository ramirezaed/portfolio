import  { useState, useEffect } from 'react';
import fotoPersonal from '../assets/fotomia.jpg';
import '../styles/home.css';
import cvpdf from '../assets/CV Ramirez Alejandro Daniel.pdf';

const Home = () => {
    const [text, setText] = useState('');
    const fullText = `Bienvenido a mi perfil. Aquí comparto mi pasión por el desarrollo
     de software  y los proyectos que he realizado. Estoy enfocado en 
     mejorar constantemente  mis habilidades,  asumir nuevos desafíos y 
     contribuir con soluciones creativas e innovadoras.`;

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setText((prevText) => prevText + fullText.charAt(index)); // Usamos charAt para asegurar que solo se añadan caracteres
                index += 1;
            } else {
                clearInterval(typingInterval); // Detener el intervalo cuando el texto esté completo
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    // Función para dividir el texto con saltos de línea
    const renderTextWithLineBreaks = (text: string) => {
        return text.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
        ));
    };

    return (
        <div className='contenedor'>
            <div className="presentacion">
                <h1>¡Hey! Soy Ale..</h1>
                <h2>Analista Programador en Sistemas de Información</h2>
                <p className="justificado">
                    {renderTextWithLineBreaks(text)} {/* Mostramos el texto con los saltos de línea */}
                </p>
                <a href={cvpdf} download="cv_Ramirez_Alejandro">
                    <button className='botonCV'>Descargar CV</button>
                </a>
            </div>

            <div className="FotoPersonal">
                <img src={fotoPersonal} alt="alejandro" />
            </div>
        </div>
    );
};

export default Home;
