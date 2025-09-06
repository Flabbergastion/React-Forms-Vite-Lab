import React from 'react';

function Filter({ onSearchChange, onCategoryChange, search }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search for items..."
        value={search}
        onChange={onSearchChange}
      />
      <select onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;