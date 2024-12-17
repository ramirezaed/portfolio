import React from "react";
import Misproyectos from "../components/Misproyectos"; 
import codi from '../assets/codiboot.jpg';
import vbnet from '../assets/vbnet.png';
import rea from '../assets/react.png';
//import DescriProject from "./projectsDescription";
import reactmongo from '../assets/reactMongo.png';


const Proyectos: React.FC = () => {
  console.log("Componente Proyectos se está renderizando");
  const projects = [         //arreglo proyectos, donde paso los datos para el componente Misproyectos
    {
      title: "E-commerce",
      description: "Tienda online. Gestión de productos, Pedidos y Usuarios. Utilizando CodeIgniter, Bootstrap, HTML5, CSS y MySQL. ",
      imageUrl: codi,
      buttonText: "Ver Más",

    },

    {
      title: "Sistema de Gestión de Ventas",
      description: "Aplicación de escritorio en VB.NET con SQL para el control de stock, ventas y generación de reportes",
      imageUrl: vbnet,
      buttonText: "Ver Más",
    },
    {
      title: "Portfolio Web",
      description: "Portfolio personal, desarrollado con react.js y css.",
      imageUrl: rea,
      buttonText: "Ver Más",
    },

    {title: "Sign up - Log in",
     description: "Registro e inicio de sesion, Desarrollado con React.js MongoDB, NodeJs",
     imageUrl: reactmongo,
     buttonText: "Ver más",
    },
 
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Misproyectos
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          buttonText={project.buttonText}
        />
      ))}
    </div>
  );
};

export default Proyectos;
