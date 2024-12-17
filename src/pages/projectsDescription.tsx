import DescripcionProject from "../components/DescriptionProject";
import React from "react";
import { useParams } from "react-router-dom";

const DescriProject : React.FC =() => {
    const { projectId } = useParams(); //
    const descrip =[  //defino el arreglo donde voy a cargar los datos del componentente

      // DESCRIPCION DE PROYECTO E-COMMERCE
        {
            title: "E-commerce",
            description: (
            <>
                <p>
                    Este proyecto consiste en el desarrollo de una aplicación web para una tienda de ventas online, que abarca desde el análisis de requisitos hasta la implementación final.<br/>
                    <br/>
                    La aplicación permite a los usuarios registrarse, realizar búsquedas de productos, agregar artículos al carrito y realizar compras de manera sencilla. También incluye una funcionalidad de contacto directo con el propietario del sitio, facilitando la interacción con los clientes.<br/>
                    <br/>
                
                    El sistema está diseñado con tres tipos de perfiles de usuario: cliente, administrador y gerente, cada uno con diferentes permisos y accesos. <br/>La aplicación permite a los administradores gestionar los productos (agregar, editar y eliminar artículos), mientras que los gerentes tienen acceso a la generación de reportes detallados sobre ventas y stock, ofreciendo una visión clara del desempeño de la tienda.<br/>
                    <br/>
                
                    La plataforma fue desarrollada utilizando CodeIgniter para el backend, Bootstrap para un diseño responsivo, MySQL como sistema de base de datos y CSS para la personalización visual. Esta combinación de tecnologías permite ofrecer una solución eficiente, escalable y fácil de usar para el comercio electrónico.<br/>
                    <br/>
                </p>
            </>
        ),
             urlpro: "https://github.com/ramirezaed/e-commerce/tree/master",
            },
      // DESCRIPCION DE PROYECTO EN VB.NET
        {
            title: "Sistema de Gestión de Ventas",
            description: (
              <>
              <p>
              El proyecto consiste en una aplicación web integral para la gestión de ventas, control de inventarios y generación de reportes, utilizando VB.NET como tecnología principal y SQL Server como base de datos. Fue desarrollado desde cero, abarcando desde el levantamiento de requisitos hasta su implementación completa, y empleando Git para el control de versiones.<br/>
              <br/>
              Utilicé VB.NET para el backend, SQL Server para la base de datos y Git para el control de versiones. El sistema incluye gestión de ventas con generación automática de comprobantes, consulta del historial de ventas y detalles de cada transacción. También permite el control preciso del inventario con actualizaciones automáticas tras cada venta, administración de productos, categorías y niveles de stock.<br/>
              <br/>
              El sistema genera informes detallados de ventas diarias, mensuales y anuales, además de estadísticas sobre productos más vendidos y el desempeño del negocio. Cuenta con tres perfiles de usuarios: Vendedor, que registra ventas y consulta su historial; Administrador, que gestiona productos, usuarios y configuraciones generales; y Gerente, que accede a reportes avanzados, estadísticas y análisis de datos.<br/>
              <br/>
              El proceso de desarrollo incluyó el levantamiento de requisitos funcionales y no funcionales mediante entrevistas y análisis de necesidades. Apliqué un ciclo de desarrollo iterativo con implementación progresiva de módulos, utilizando Git para gestionar cambios, realizar pruebas y mantener un historial de desarrollo. Realicé pruebas unitarias, funcionales y de usuario para garantizar la calidad y estabilidad del sistema.<br/>
              <br/>
              Este proyecto representa una experiencia significativa en desarrollo full-stack, gestión de bases de datos, control de versiones y análisis de sistemas. La realización desde cero permitió adquirir habilidades en desarrollo de aplicaciones empresariales, resolución de problemas y documentación técnica completa. Este trabajo destaca mi capacidad para gestionar todas las etapas del desarrollo de software, desde el análisis inicial hasta el despliegue y mantenimiento continuo.<br/>
              </p>
              </>
            ),
            urlpro: "https://github.com/ramirezaed/GestionVentas",

        },
      // DESCRIPCION DE PROYECTO PORTFOLIO
        {
          title : "Portfolio Web",
          description: (
            <>
            <p>
              El proyecto consiste en un portfolio web interactivo y visualmente atractivo utilizando React JS, con el objetivo de mostrar mi experiencia y habilidades como analista programador en sistemas de información. <br/>
              <br/>
              El sitio web incluye secciones que presentan mis proyectos, habilidades técnicas y logros profesionales de manera clara y organizada. Para el diseño, empleé CSS y técnicas de diseño responsivo, asegurando que el portfolio se vea bien en dispositivos móviles, tabletas y escritorios.<br/>
              <br/>
              Para la navegación, utilicé react-router-dom, lo que me permitió crear rutas dinámicas y fluidas, y la función useParams para personalizar las URLs y mostrar contenido específico basado en parámetros.<br/>
              <br/>
              Además, el proyecto fue desplegado en un servidor para hacerlo accesible en línea, permitiendo que cualquier persona pueda acceder y explorar mi trabajo de manera sencilla y profesional.<br/>

            </p>
            </>

          ),
          urlpro: "https://github.com/ramirezaed/portfolio.git",

        },    
    ]; // termino de cargar el arreglo

    const project = descrip.find((p) => p.title === projectId); //solo muestre el proyecto especifico
    
    if (!project) return <p>Proyecto no encontrado</p>;

    return (
        <div className="descripContainer">
          <DescripcionProject
            title={project.title}
            description={project.description}
            urlpro={project.urlpro}
          />
        </div>
      );
    };
    

export default DescriProject;