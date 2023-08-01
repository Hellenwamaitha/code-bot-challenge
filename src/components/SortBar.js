import React from "react";

const SortBar = ({ onChange }) => {
  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    onChange(selectedSortType);
  };

  return (
    <div>
      <label htmlFor="sortType">Sort by:</label>
      <select id="sortType" onChange={handleSortChange}>
        <option value="">--Select--</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
