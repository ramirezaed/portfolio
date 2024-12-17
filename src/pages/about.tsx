import { useState } from 'react';
import titulo from '../assets/titulo.png'; // Tu imagen
import '../styles/about.css';

const AcercaDeMi = () => {
    const [mostrarTitulo, setMostrarTitulo] = useState(false);

    const manejarClick = () => {
        setMostrarTitulo(!mostrarTitulo);
    };

    return (
        <div className="contenedorAbout">
            <button className="boton" onClick={manejarClick}>
                Diploma 
                <span className={`flecha ${mostrarTitulo ? 'arriba' : 'abajo'}`}>▼</span>
            </button>

            {mostrarTitulo && (
                <div className="titulo">
                    <img src={titulo} alt="Diploma" className="diploma" />
                </div>
            )}
            <div className='descripcion' >
                <h2>Acerca de mí.</h2>
                <p>
¡Hola! Soy Alejandro, Analista en Sistemas de Información, soy de la ciudad de Corrientes Capital, Argentina. 
Actualmente, estoy finalizando mi tesis para obtener el título de Licenciado en Sistemas, lo cual refleja mi 
pasión por la tecnología y mi compromiso con el aprendizaje continuo. A lo largo de mi trayectoria académica y 
profesional, he tenido la oportunidad de desarrollar habilidades técnicas sólidas y de mejorar mi capacidad para 
trabajar en equipo, gracias a diversos proyectos y experiencias.
</p>

<h2>Experiencia Profesional</h2>
<p>
He trabajado en soporte técnico para pequeñas empresas, encargándome del mantenimiento de equipos, software y redes. 
Esta experiencia me permitió comprender cómo la tecnología optimiza los procesos dentro de las organizaciones, 
al mismo tiempo que adquirí habilidades prácticas para la resolución de problemas técnicos.
Asimismo, fui parte del Plan Conectar Igualdad, un programa nacional de cableado de redes en escuelas secundarias, 
lo que me permitió aplicar mis conocimientos mientras contribuía a un proyecto con un impacto social significativo.
</p>

<h2>Proyectos Académicos y Colaborativos</h2>
<p>
A lo largo de mis estudios, participé en varios proyectos grupales enfocados en el desarrollo de aplicaciones web 
y de escritorio. Estas experiencias no solo me permitieron aplicar tecnologías modernas, sino que también me enseñaron
 la importancia de la comunicación efectiva y el trabajo en equipo. Además, estos proyectos fueron una excelente 
 oportunidad para aprender a desarrollar soluciones personalizadas y optimizar el rendimiento de las aplicaciones.
</p>

<h2>Motivación y Habilidades</h2>
<p>
Mi pasión por la tecnología me impulsa a aprender y mejorar constantemente. Me especializo en crear soluciones
 tecnológicas innovadoras que resuelvan problemas reales, convencido de que la tecnología tiene el poder de 
 transformar positivamente la sociedad.
A lo largo de mi carrera, he demostrado un fuerte sentido de perseverancia y determinación para alcanzar mis metas, 
incluso cuando los desafíos parecen insuperables. Obtener mi título será el reflejo de estos valores que guían mi 
trabajo tanto en el ámbito académico como profesional.
</p>

<h2>Objetivos Profesionales</h2>
<p>
Mi objetivo es seguir creciendo profesionalmente, aprender nuevas tecnologías y afrontar desafíos que me 
permitan aplicar mi experiencia y conocimientos. Estoy motivado para colaborar en proyectos que generen un
 impacto positivo en la sociedad, aportando valor a cada equipo del que forme parte.
</p>

        </div>
        </div>
    );
};

export default AcercaDeMi;
