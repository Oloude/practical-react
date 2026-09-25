//Sorting Data: Add buttons to sort a list alphabetically or by price (ascending/descending).

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 45000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 32000,
    category: "Fashion",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 85000,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 55000,
    category: "Sports",
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 67000,
    category: "Kitchen",
  },
  {
    id: 6,
    name: "Cotton T-Shirt",
    price: 12000,
    category: "Fashion",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 38000,
    category: "Electronics",
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 18000,
    category: "Sports",
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 25000,
    category: "Home",
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 9500,
    category: "Sports",
  },
  {
    id: 11,
    name: "Mechanical Keyboard",
    price: 72000,
    category: "Electronics",
  },
  {
    id: 12,
    name: "Ceramic Mug",
    price: 7500,
    category: "Kitchen",
  },
];

function SortingData() {
  const [filter, setFilter] = useState("nameAZ");

  function handleFilterChange(value) {
    setFilter(value);
  }

  let sortedData = [];

  if (filter === "nameAZ") {
    sortedData = [...products].sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "nameZA") {
    sortedData = [...products].sort((a, b) => b.name.localeCompare(a.name));
  } else if (filter === "priceLowest") {
    sortedData = [...products].sort((a, b) => a.price - b.price);
  } else {
    sortedData = [...products].sort((a, b) => b.price - a.price);
  }
  return (
    <div className="flex flex-col gap-5 p-8 font-serif">
      <select
        name=""
        id=""
        onChange={(e) => handleFilterChange(e.target.value)}
        value={filter}
        className="w-50 self-end"
      >
        <option value="nameAZ">Name A-Z</option>
        <option value="nameZA">Name Z-A</option>
        <option value="priceLowest">Price Lowest</option>
        <option value="priceHighest">Price Highest</option>
      </select>

      <div className="grid grid-cols-3 gap-3">
        {sortedData.map((product) => (
          <div key={product.id} className="p-5 rounded-xl shadow flex flex-col gap-2">
            <h4 className="text-mauve-700 text-xl">{product.name}</h4>
            <span className="text-mauve-500 text-base">{product.price}</span>
            <span className="text-mauve-400 text-sm">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortingData;
