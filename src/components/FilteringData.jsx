//Filtering Data: Create an input that filters a displayed list in real-time (e.g., search bar for a user list).

import { useState } from "react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "UI/UX Designer",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Project Manager",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "DevOps Engineer",
  },
  {
    id: 6,
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    role: "QA Engineer",
  },
  {
    id: 7,
    name: "James Taylor",
    email: "james.taylor@example.com",
    role: "Mobile Developer",
  },
  {
    id: 8,
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    role: "Product Designer",
  },
  {
    id: 9,
    name: "Daniel Thomas",
    email: "daniel.thomas@example.com",
    role: "Data Analyst",
  },
  {
    id: 10,
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    role: "Product Manager",
  },
  {
    id: 11,
    name: "William Harris",
    email: "william.harris@example.com",
    role: "Software Engineer",
  },
  {
    id: 12,
    name: "Ava Clark",
    email: "ava.clark@example.com",
    role: "Technical Writer",
  },
  {
    id: 13,
    name: "Benjamin Lewis",
    email: "benjamin.lewis@example.com",
    role: "Cloud Engineer",
  },
  {
    id: 14,
    name: "Mia Walker",
    email: "mia.walker@example.com",
    role: "Business Analyst",
  },
  {
    id: 15,
    name: "Ethan Hall",
    email: "ethan.hall@example.com",
    role: "Cybersecurity Specialist",
  },
];

function FilteringData() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }

  const filteredData = users.filter((user) => {
    if (!user.name.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-5 p-8">
      <input
        value={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value.trim())}
        type="search"
        name=""
        id=""
        placeholder="search user"
        className="border border-mauve-900 rounded-md p-3 outline-none text-sm text-mauve-600 focus:border-amber-400"
      />
      <div className="flex flex-col gap-3">
        {filteredData.map((user) => (
          <span key={user.id} className="text-sm text-mauve-700">
            {user.name}
          </span>
        ))}
      </div>
    </div>
  );
}

// Using .trim() on every keystroke removes leading and trailing spaces immediately. This can make typing feel odd—for example, if the user accidentally types a space or wants to search for a name with multiple words.

// Instead, store the input exactly as the user types it and only trim when filtering (if needed).

// const filteredData = users.filter((user) =>
//   user.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
// );

// return (
//   <div className="flex flex-col gap-5 p-8">
//     <input
//       value={searchQuery}
//       onChange={(e) => handleSearchQuery(e.target.value)}
//       type="search"
//       placeholder="Search user"
//       className="border border-mauve-900 rounded-md p-3 outline-none text-sm text-mauve-600 focus:border-amber-400"
//     />

//     <div className="flex flex-col gap-3">
//       {filteredData.length > 0 ? (
//         filteredData.map((user) => (
//           <span key={user.id} className="text-sm text-mauve-700">
//             {user.name}
//           </span>
//         ))
//       ) : (
//         <p className="text-sm text-gray-500">No users found.</p>
//       )}
//     </div>
//   </div>
// );

export default FilteringData;
