import React, { useState, useEffect } from "react";
import "../styles/equipment.css";
import equipmentData from "../data/equipmentData";
import EquipmentList from "./EquipmentList";

const EquipmentFilter = ({ type, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [options, setOptions] = useState({});
  const [expandedFilters, setExpandedFilters] = useState({});

  useEffect(() => {
    if (!equipmentData[type]) return;

    const uniqueOptions = {};
    equipmentData[type].forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (!uniqueOptions[key]) {
          uniqueOptions[key] = new Set();
        }
        uniqueOptions[key].add(item[key]);
      });
    });

    Object.keys(uniqueOptions).forEach((key) => {
      uniqueOptions[key] = new Set([...uniqueOptions[key]].sort());
    });

    delete uniqueOptions.name;
    delete uniqueOptions.book;
    delete uniqueOptions.quality;
    delete uniqueOptions.acc_mod;
    delete uniqueOptions.img;

    const formattedOptions = Object.fromEntries(
      Object.entries(uniqueOptions).map(([key, values]) => [key, [...values]])
    );

    formattedOptions.cost = ["0-500", "501-1000", "1001-2000", "2001+"];

    setOptions(formattedOptions);
    setSelectedFilters({});
    setExpandedFilters({});
    onFilterChange({});
  }, [type]);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...selectedFilters, [name]: value };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearFilter = (field) => {
    const updatedFilters = { ...selectedFilters };
    delete updatedFilters[field];
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleExpand = (field) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div>
      <div className="equipment-filters">
        <h2>Filters</h2>
        {Object.entries(options).map(([field, values]) => {
          const isExpanded = expandedFilters[field];
          const displayedValues = isExpanded ? values : values.slice(0, 4);

          return (
            <div key={field} className="filter-section">
              
              <div className="filter-header">
                <h3>{field}</h3> <button
                  className="clear-button"
                  onClick={() => clearFilter(field)}
                >
                  Clear Filter
                </button>
              </div>

              {displayedValues.map((value) => (
                <div key={value} className="filter-option">
                  <input
                    type="radio"
                    name={field}
                    value={value}
                    checked={selectedFilters[field] === value}
                    onChange={handleRadioChange}
                    id={`${field}-${value}`}
                  />
                  <label htmlFor={`${field}-${value}`}>{String(value)}</label>
                </div>
              ))}
              {values.length > 4 && (
                <button
                  className="expand-button"
                  onClick={() => toggleExpand(field)}
                >
                  {isExpanded ? "▲ Show Less" : "▼ Show More"}
                </button>
              )}
              
            </div>
          );
        })}
      </div>
      <div className="filtered">
        <EquipmentList type={type} filters={selectedFilters} />
      </div>
    </div>
  );
};

export default EquipmentFilter;
