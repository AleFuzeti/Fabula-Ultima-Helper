import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import EquipmentPage from "./components/EquipmentPage";
import HeroicSkillsPage from "./components/HeroicSkillsPage";
import ArtifactsPage from "./components/ArtifactsPage"; // Importando a página de artefatos
import "./App.css"; // Importando o arquivo de estilos

function App() {
  return (
    <Router basename="/Fabula-Ultima-Helper">
      <div className="app-container">
        <Content />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation(); // Hook para acessar a rota atual

  return (
    <div className="content">
        <div className="image-links">
          <Link to="/equipment">
            <img
              src={`${process.env.PUBLIC_URL}/assets/equipment.jpg`}
              alt="Equipment"
              style={{ width: "33%", height: "auto" }} // Ajuste de tamanho
            />
          </Link>
          <Link to="/heroic-skills">
            <img
              src={`${process.env.PUBLIC_URL}/assets/heroic_skills.jpg`}
              alt="Heroic Skills"
              style={{ width: "33%", height: "auto" }} // Ajuste de tamanho
            />
          </Link>
          <Link to="/artifacts">
            <img
              src={`${process.env.PUBLIC_URL}/assets/artifacts.jpg`}
              alt="Artifacts"
              style={{ width: "33%", height: "auto" }} // Ajuste de tamanho
            />
          </Link>
        </div>
      
      <Routes>
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/heroic-skills" element={<HeroicSkillsPage />} />
        <Route path="/artifacts" element={<ArtifactsPage />} /> {/* Nova rota para Artifacts */}
      </Routes>
    </div>
  );
}

export default App;