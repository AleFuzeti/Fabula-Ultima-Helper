import React, { useState } from "react";
import kalorethChars from "../data/kalorethChars";
import "../styles/char.css";

const KalorethPage = () => {
  const [selected, setSelected] = useState("personagens");

  const renderContent = () => {
    if (selected === "personagens") {
      return kalorethChars.map((char, i) => (
        <div className="character-card" key={i}>
          <div className="header">
            <div className="character-name">{char.name.toUpperCase()}</div>
            <div className="level-badge">{char.pronouns}</div>
          </div>
          <div className="main-content">
            <img
              src={char.image}
              alt={`${char.name} Character Portrait`}
              className="character-image"
            />
            <div className="character-info">
              <div className="traits-label">TRAITS</div>
              <div className="traits-content">
                <div className="trait-item">
                  <span className="trait-label">IDENTITY:</span> {char.identity}
                </div>
                <div className="trait-item">
                  <span className="trait-label">THEME:</span> {char.theme}
                </div>
                <div className="trait-item">
                  <span className="trait-label">ORIGIN:</span> {char.origin}
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    } else if (selected === "diario") {
      return <div>Diário de Leran (em breve)</div>;
    } else if (selected === "mapa") {
      return <div>Mapa De Kaloreth (em breve)</div>;
    }
  };

  return (
    <>
      <div className="mini-header">
        <button
          className={selected === "personagens" ? "active" : ""}
          onClick={() => setSelected("personagens")}
        >
          Personagens
        </button>
        <button
          className={selected === "diario" ? "active" : ""}
          onClick={() => setSelected("diario")}
        >
          Diário de Leran
        </button>
        <button
          className={selected === "mapa" ? "active" : ""}
          onClick={() => setSelected("mapa")}
        >
          Mapa De Kaloreth
        </button>
      </div>
      {renderContent()}
    </>
  );
};

export default KalorethPage;