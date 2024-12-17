import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importaciones necesarias
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
//import Contact from "./pages/contact";
import AcercaDeMi from "./pages/about";
import Proyectos from "./pages/project";

import "./App.css";
import DescriProject from "./pages/projectsDescription";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       {/* <Route path="/contact" element={<Contact />} />*/}
        <Route path="/about" element={<AcercaDeMi />} />
        <Route path="/project" element={<Proyectos />} />
          {/* agrego ruta dinamica*/}
          <Route path= "/detalle/:projectId" element= {<DescriProject />} />
                                                        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
