import React from "react";
import heroicSkillsData from "../data/heroicSkillsData";
import "../styles/heroicSkills.css";

const HeroicSkillsList = ({ filters }) => {
  const filteredSkills = heroicSkillsData.filter((skill) => {
    if (Object.keys(filters).length === 0) return true; // Se nenhum filtro estiver selecionado, retorna todas as habilidades
    return Object.entries(filters).every(([key, values]) => {
      if (!values || values.length === 0) return true;
      const skillRequirements = Array.isArray(skill[key]) ? skill[key] : [skill[key]];
      return skillRequirements.some((req) => values.includes(req));
    });
  });

  return (
    <div className="heroic-skills-container">
      {filteredSkills.map((skill) => (
        <div key={skill.name} className="heroic-skill-card">
          <span>
            <h3>{skill.name}</h3>
            <p>{skill.book}</p>
          </span>
          <p><strong>Mastered:</strong> {Array.isArray(skill.requirement) ? skill.requirement.join(", ") : skill.requirement}</p>
          <p>{skill.other && <strong>Other: </strong>}{skill.other}</p>
          <p class="description">{skill.description}</p>
          <p>{skill.description2}</p>
          <p>{skill.description3}</p>
          <p>{skill.description4}</p>
          <p>{skill.description5}</p>
          <p>{skill.description6}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroicSkillsList;