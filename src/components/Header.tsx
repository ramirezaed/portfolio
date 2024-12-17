import { useState } from "react"; 
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import './HeaderStyle.css';

const Header = () => { // Componente Header
    const [isOpen, setIsOpen] = useState(false); // Cambia IsOpen a isOpen para seguir la convención camelCase
    const handleLinkClick = () => setIsOpen(false);
    return (
        <header>
            <div className="navbar"> 
                <div className="nav_logo">
                    <Link to="/">PORTFOLIO</Link> {/* Usar Link para la navegación interna */}
                </div>
                
                <div className={`nav_items ${isOpen ? "open" : ""}`}>
                    <Link to="/" onClick= {handleLinkClick}>Inicio</Link> {/* Usar Link */}
                   {/* <Link to="/contact">Contact</Link> {/* Usar Link */}
                   

                    <Link to="/about"onClick={handleLinkClick}>Acerca de mí</Link> {/* Usar Link */}

                    <Link to="/project"onClick={handleLinkClick}>Proyectos</Link> {/* Usar Link */}
                </div>
                
                <div 
                    className={`nav_toggle ${isOpen ? "open" : ""}`} 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation" : "Open navigation"} // Agregar accesibilidad
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
