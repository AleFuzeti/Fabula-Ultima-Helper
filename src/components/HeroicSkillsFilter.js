import React, { useState, useEffect } from "react";
import heroicSkillsData from "../data/heroicSkillsData";
import "../styles/heroicSkills.css";

const HeroicSkillsFilter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const uniqueRequirements = [
      ...new Set(
        heroicSkillsData.flatMap((skill) =>
          Array.isArray(skill.requirement) ? skill.requirement : [skill.requirement]
        )
      ),
    ];
    setRequirements(uniqueRequirements);
  }, []);

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const updatedFilters = { ...selectedFilters };

    if (checked) {
      if (!updatedFilters[name]) {
        updatedFilters[name] = [];
      }
      updatedFilters[name].push(value);
    } else {
      updatedFilters[name] = updatedFilters[name].filter((v) => v !== value);
      if (updatedFilters[name].length === 0) {
        delete updatedFilters[name];
      }
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="heroic-skills-filters">
      <h2>Mastered</h2>
      <div className="filter-section">
        {requirements.map((req) => (
          <div key={req} className="filter-option">
            <input
              type="checkbox"
              name="requirement"
              value={req}
              onChange={handleCheckboxChange}
              id={`requirement-${req}`}
            />
            <label htmlFor={`requirement-${req}`}>{req}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroicSkillsFilter;