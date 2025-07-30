import React, { useState } from "react";
import kalorethChars from "../data/kalorethChars";
import diarioLeran from "../data/diarioLeran";
import { getDiaryImageUrl } from "../utils/imageUtils";
import "../styles/char.css";
import "../styles/diario.css";

const KalorethPage = () => {
  const [selected, setSelected] = useState("personagens");
  const [expandedEntries, setExpandedEntries] = useState({});

  const toggleEntry = (entryId) => {
    setExpandedEntries(prev => ({
      ...prev,
      [entryId]: !prev[entryId]
    }));
  };

  const processContent = (content) => {
    // Processa marcadores de imagem [IMG:nome_arquivo.jpg:alt_text] ou [IMG:nome_arquivo.jpg:alt_text:size]
    return content.replace(/\[IMG:([^:]+):([^:\]]+)(?::([^:\]]+))?\]/g, (match, fileName, altText, size) => {
      const imageUrl = getDiaryImageUrl(fileName);
      const sizeClass = size ? `diary-image ${size}` : 'diary-image';
      return `<img src="${imageUrl}" alt="${altText}" class="${sizeClass}" />`;
    });
  };

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
      return (
        <div className="diario-container">
          {diarioLeran.map((entrada, index) => (
            <div className="diario-entry" key={entrada.id}>
              <div 
                className="diario-header" 
                onClick={() => toggleEntry(entrada.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="diario-titulo">
                  {entrada.titulo}
                  <span className="expand-icon">
                    {expandedEntries[entrada.id] ? '▼' : '▶'}
                  </span>
                </div>
                <div className="diario-data">{entrada.data}</div>
              </div>
              {expandedEntries[entrada.id] && (
                <div className="diario-conteudo">
                  {entrada.conteudo.split('\n\n').map((paragrafo, pIndex) => {
                    const processedContent = processContent(paragrafo);
                    // Verifica se o parágrafo contém uma tag img
                    if (processedContent.includes('<img')) {
                      return (
                        <div 
                          key={pIndex} 
                          dangerouslySetInnerHTML={{ __html: processedContent }}
                        />
                      );
                    }
                    return <p key={pIndex}>{paragrafo}</p>;
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      );
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