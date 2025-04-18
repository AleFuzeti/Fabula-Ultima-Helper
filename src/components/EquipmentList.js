import React from "react";
import "../styles/equipment.css"; // Importando o CSS correto
import equipmentData from "../data/equipmentData";

const EquipmentList = ({ type, filters }) => {
  if (!equipmentData[type]) return null;

  const filterByCost = (itemCost, selectedRange) => {
    const cost = parseInt(itemCost, 10);
    switch (selectedRange) {
      case "0-500":
        return cost >= 0 && cost <= 500;
      case "501-1000":
        return cost >= 501 && cost <= 1000;
      case "1001-2000":
        return cost >= 1001 && cost <= 2000;
      case "2001+":
        return cost >= 2001;
      default:
        return true;
    }
  };

  const filteredEquipment = equipmentData[type].filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      if (key === "cost") {
        return filterByCost(item[key], value);
      }
      return item[key] === value;
    });
  });

  const renderEquipmentCard = (item) => {
    return (
      <div key={item.name} className="equipment-card">

      <div className="header">
        <img
              src={item.img ? `${process.env.PUBLIC_URL}/assets/Equips/${type}/${item.img}` : `${process.env.PUBLIC_URL}/assets/loading.gif`}
              alt={item.name}
              className="equip-image"
            />
        <div>
          <div className="equipment-book">
            <span>
            </span>
            <span>{item.book}</span>
          </div>

          <div className="equipment-category">
            <span>{item.category}</span>
            <span>{item.rare}</span>
          </div>

          <div className="equipment-header">
          <span>
              {item.name}{" "}
              {item.martial === "Yes" && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.98 412.19" width="15"height="15">
                  <g id="martia</g>lFilled" data-name="martialFilled"> <path className="martialFilled" d="M380.29,206.1c-69,33.4-137.3,100.5-175.8,178-38.5-77.5-106.8-144.6-175.8-178C97.69,172.7,165.99,105.6,204.49,28.1c38.5,77.5,106.8,144.6,175.8,178Z"></path> </g>
                </svg>
              )}
            </span>
            <span>{item.cost} z</span>
          </div>

        </div>
      </div>
       {(type === "weapon") && (
        <div className="equipment-stats">
          <span>{item.accuracy} {item.acc_mod}</span>
          <span>{item.damage} {item.damage_type}</span>
        </div>
        )}

        {((type === "armor") || (type === "shield")) && (
        <>
        <div className="equipment-stats">
          <span>Defense</span>
          <span>MDefense</span>
        {(type === "armor") && (
          <span>Initiative</span>
        )}
        </div>
        
        <div className="equipment-details">
          <span>{item.def}</span>
          <span>{item.mdef}</span>
          {(type === "armor") && (
          <span>{item.initiative}</span>
          )}
        </div>
        </>
        )}

        <div className="equipment-details">
          <span>{item.hand}</span>
          <span>{item.range}</span>
        </div>

        <div className="equipment-quality">{item.quality}</div>
      </div>
    );
  };

  return <div className="equipment-container">{filteredEquipment.map(renderEquipmentCard)}</div>;
};

export default EquipmentList;
