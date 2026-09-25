//Nested Data Mapping: Render a list of categories, where each category contains a nested list of items (map inside a map).
const categories = [
  {
    id: 1,
    name: "Fruits",
    items: ["Apple", "Banana", "Orange", "Mango", "Pineapple"],
  },
  {
    id: 2,
    name: "Vegetables",
    items: ["Carrot", "Broccoli", "Spinach", "Tomato", "Cucumber"],
  },
  {
    id: 3,
    name: "Beverages",
    items: ["Coffee", "Tea", "Orange Juice", "Milk", "Water"],
  },
  {
    id: 4,
    name: "Electronics",
    items: ["Laptop", "Smartphone", "Tablet", "Headphones", "Smartwatch"],
  },
  {
    id: 5,
    name: "Clothing",
    items: ["T-Shirt", "Jeans", "Jacket", "Sneakers", "Hat"],
  },
];

function NestedData() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 font-mono p-6 gap-5">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col gap-6 bg-white shadow rounded-xl p-5"
        >
          <h3 className="text-xl font-medium text-mauve-700">
            {category.name}
          </h3>
          <ul className="flex flex-col gap-2">
            {category.items.map((item) => (
              <li key={item} className="text-sm text-mauve-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedData;
