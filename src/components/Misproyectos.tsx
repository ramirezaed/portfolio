
import React from "react";
import "../styles/Misproyectos.css";
import { useNavigate } from "react-router-dom";


interface MisproyectosProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const Misproyectos: React.FC<MisproyectosProps> = ({ title, description, imageUrl, buttonText }) => {
  const navigate = useNavigate(); //

  const handleViewMore = () => { //
    navigate(`/detalle/${title}`);
  };
  
  
  return (
    <div className="containerProjects">
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <button className="project-button" onClick={handleViewMore}>{buttonText}</button>
    </div>
    </div>
  );
};

export default Misproyectos;