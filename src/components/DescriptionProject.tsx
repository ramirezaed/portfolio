import React from 'react';
import '../styles/projectsDescripcion.css';


interface descripcionProps {
    title: string;
    description:  React.ReactNode;  // Permite que puedo utilizar <p> o tratarlo como un html
    urlpro: string;

}
 const DescripcionProject: React.FC<descripcionProps> = ({title, description, urlpro}) => {
    return (
        <div className='descripcionProject'>
            <h2 className= 'titleDescrition'> {title}  </h2>
            <p  className= 'description'>     {description}</p>
            <p  className= 'urlproject' >  
                <button className='Descripcion-project-button'>
                 <a href={urlpro}>Visitar Repositorio</a>
            </button>
            </p>
            </div>
        )  
 };

 export default DescripcionProject;