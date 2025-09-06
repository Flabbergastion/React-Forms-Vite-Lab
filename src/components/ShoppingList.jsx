import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, searchText: propSearchText, onSearchChange: propOnSearchChange, onItemFormSubmit = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Local state to manage search text internally when no prop is provided
  const [localSearchText, setLocalSearchText] = useState("");
  
  // Use a controlled/uncontrolled pattern for search text
  const isControlled = propSearchText !== undefined;
  const searchText = isControlled ? propSearchText : localSearchText;
  const onSearchChange = isControlled ? propOnSearchChange : (e) => setLocalSearchText(e.target.value);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const searchedItems = items.filter((item) => {
    if (!item || !item.name) return false;
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const itemsToDisplay = searchedItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
        search={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;