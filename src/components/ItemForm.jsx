import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const initialFormState = {
  name: "",
  category: "Produce",
};

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState(initialFormState);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name) {
      const newItem = {
        id: uuid(),
        name: formData.name,
        category: formData.category,
      };
      onItemFormSubmit(newItem);
      setFormData(initialFormState);
    }
  }

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        aria-label="Name" // Add this for testability
        value={formData.name}
        onChange={handleFormChange}
      />
      <select
        name="category"
        aria-label="Category" // Add this for testability
        value={formData.category}
        onChange={handleFormChange}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;