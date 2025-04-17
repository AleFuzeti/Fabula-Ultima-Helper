import React, { useState, useCallback } from "react";
import heroicSkillsData from "../data/heroicSkillsData";
import HeroicSkillsFilter from "./HeroicSkillsFilter";
import HeroicSkillsList from "./HeroicSkillsList";

const HeroicSkillsPage = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Heroic Skills Viewer</h1>
      <HeroicSkillsFilter onFilterChange={handleFilterChange} />
      <HeroicSkillsList filters={filters} />
    </div>
  );
}; 

export default HeroicSkillsPage;