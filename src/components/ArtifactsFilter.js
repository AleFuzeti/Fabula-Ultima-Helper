import React, { useState, useEffect } from "react";
import artifactsData from "../data/artifactsData";
import "../styles/artifacts.css";

const ArtifactsFilter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Extrai os livros únicos dos artefatos
    const uniqueBooks = [...new Set(artifactsData.map((artifact) => artifact.book))];
    setBooks(uniqueBooks);
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
    <div className="artifact-filters">
      <h2>Books</h2>
      <div className="filter-section">
        {books.map((book) => (
          <div key={book} className="filter-option">
            <input
              type="checkbox"
              name="book"
              value={book}
              onChange={handleCheckboxChange}
              id={`book-${book}`}
            />
            <label htmlFor={`book-${book}`}>{book}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtifactsFilter;