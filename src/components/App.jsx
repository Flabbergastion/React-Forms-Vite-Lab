import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        searchText={searchText}
        onSearchChange={setSearchText}
        onItemFormSubmit={handleAddItem}
      />
    </div>
  );
}

export default App;