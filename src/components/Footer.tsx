import "./footerStyle.css"
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import link from "../assets/linkedin.png"
const Footer = () => {
    return (
        <footer>
            <div className="contenedorF">
            <a href="https://github.com/ramirezaed?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className="gitbutton">      <img src = {github}   alt="git"        /></button>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ramirezaed@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="gmailbutton">    <img src = {gmail}    alt= "gmail"     /></button>
            </a>
              <a href="https://www.linkedin.com/in/ramirez-alejandro-daniel/" target="_blank" rel="noopener noreferrer">
              <button className="linkbutton">     <img src = {link} alt = "link" /> </button>
            </a>
    
           </div>
            
        </footer>
    )
};
export default Footer;