import React from "react";

const EquipmentCard = ({ item }) => {
  return React.createElement(
    "div",
    { className: "border p-4 rounded shadow-md" },
    React.createElement("h3", { className: "text-lg font-bold" }, item.name),
    React.createElement(
      "ul",
      {},
      Object.entries(item).map(([key, value]) =>
        React.createElement(
          "li",
          { key: key },
          React.createElement("strong", {}, key + ": "),
          String(value)
        )
      )
    )
  );
};

export default EquipmentCard;
