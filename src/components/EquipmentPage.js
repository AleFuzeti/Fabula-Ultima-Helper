import React, { useState, useCallback } from "react";
import equipmentData from "../data/equipmentData";
import EquipmentFilter from "./EquipmentFilter";
import EquipmentList from "./EquipmentList";

const EquipmentPage = () => {
  const [selectedType, setSelectedType] = useState("weapon");
  const [filters, setFilters] = useState({});

  // Memoiza a função para evitar recriação e resolver o warning
  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Equipment Viewer</h1>
      <select
        className="p-2 border rounded select"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {Object.keys(equipmentData).map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      <EquipmentFilter type={selectedType} onFilterChange={handleFilterChange} />
      <EquipmentList items={equipmentData[selectedType]} filters={filters} />
    </div>
  );
};

export default EquipmentPage;
