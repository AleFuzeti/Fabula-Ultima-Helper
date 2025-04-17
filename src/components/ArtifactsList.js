import React from "react";
import artifactsData from "../data/artifactsData";
import "../styles/artifacts.css";

const ArtifactsList = ({ filters }) => {
  const filteredArtifacts = artifactsData.filter((artifact) => {
    if (Object.keys(filters).length === 0) return true; // Retorna todos os artefatos se nenhum filtro for aplicado
    return Object.entries(filters).every(([key, values]) => {
      if (!values || values.length === 0) return true;
      const artifactAttributes = Array.isArray(artifact[key]) ? artifact[key] : [artifact[key]];
      return artifactAttributes.some((attr) => values.includes(attr));
    });
  });

  return (
    <div className="artifacts-container">
      {filteredArtifacts.map((artifact) => (
        <div key={artifact.name} className="artifact-card">
          <span>
            <h3>{artifact.name}</h3>
            <p> {artifact.book}</p>
          </span>
          <p>{artifact.visual}</p>
          <p className="description">{artifact.description}</p>
          {artifact.description2 && <p>{artifact.description2}</p>}
          {artifact.description3 && <p>{artifact.description3}</p>}
        </div>
      ))}
    </div>
  );
};

export default ArtifactsList;