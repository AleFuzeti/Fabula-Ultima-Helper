import React, { useState, useCallback } from "react";
import ArtifactsList from "./ArtifactsList";
import ArtifactsFilter from "./ArtifactsFilter";

const ArtifactsPage = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters); // Atualiza os filtros com os valores recebidos do filtro
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Artifacts Viewer</h1>
      <ArtifactsFilter onFilterChange={handleFilterChange} />
      <ArtifactsList filters={filters} />
    </div>
  );
};

export default ArtifactsPage;