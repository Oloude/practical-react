//Pagination Logic: Display only 10 items at a time and create "Next/Previous" buttons that slice the array.

import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Amara Okafor",
    email: "amara.okafor@example.com",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Daniel Williams",
    email: "daniel.williams@example.com",
    role: "Backend Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "UI Designer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Chinedu Eze",
    email: "chinedu.eze@example.com",
    role: "Product Manager",
    status: "Active",
  },
  {
    id: 5,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "QA Engineer",
    status: "Active",
  },
  {
    id: 6,
    name: "Tunde Adeyemi",
    email: "tunde.adeyemi@example.com",
    role: "Frontend Developer",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Michael Smith",
    email: "michael.smith@example.com",
    role: "Backend Developer",
    status: "Active",
  },
  {
    id: 8,
    name: "Fatima Bello",
    email: "fatima.bello@example.com",
    role: "UX Researcher",
    status: "Active",
  },
  {
    id: 9,
    name: "Jessica Davis",
    email: "jessica.davis@example.com",
    role: "UI Designer",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Ibrahim Musa",
    email: "ibrahim.musa@example.com",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    id: 11,
    name: "Grace Wilson",
    email: "grace.wilson@example.com",
    role: "Product Manager",
    status: "Active",
  },
  {
    id: 12,
    name: "Oluwaseun Adebayo",
    email: "oluwaseun.adebayo@example.com",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 13,
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    role: "Backend Developer",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Blessing Nwosu",
    email: "blessing.nwosu@example.com",
    role: "QA Engineer",
    status: "Active",
  },
  {
    id: 15,
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    role: "UX Researcher",
    status: "Active",
  },
  {
    id: 16,
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@example.com",
    role: "DevOps Engineer",
    status: "Inactive",
  },
  {
    id: 17,
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    role: "UI Designer",
    status: "Active",
  },
  {
    id: 18,
    name: "Kelechi Obi",
    email: "kelechi.obi@example.com",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 19,
    name: "James Thomas",
    email: "james.thomas@example.com",
    role: "Backend Developer",
    status: "Active",
  },
  {
    id: 20,
    name: "Aisha Abdullahi",
    email: "aisha.abdullahi@example.com",
    role: "Product Manager",
    status: "Inactive",
  },
  {
    id: 21,
    name: "Henry Moore",
    email: "henry.moore@example.com",
    role: "QA Engineer",
    status: "Active",
  },
  {
    id: 22,
    name: "Esther Okoro",
    email: "esther.okoro@example.com",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 23,
    name: "William Jackson",
    email: "william.jackson@example.com",
    role: "DevOps Engineer",
    status: "Inactive",
  },
  {
    id: 24,
    name: "Mariam Yusuf",
    email: "mariam.yusuf@example.com",
    role: "UX Researcher",
    status: "Active",
  },
  {
    id: 25,
    name: "Noah White",
    email: "noah.white@example.com",
    role: "Backend Developer",
    status: "Active",
  },
  {
    id: 26,
    name: "Adaeze Okeke",
    email: "adaeze.okeke@example.com",
    role: "UI Designer",
    status: "Inactive",
  },
  {
    id: 27,
    name: "Benjamin Harris",
    email: "benjamin.harris@example.com",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 28,
    name: "Zainab Ali",
    email: "zainab.ali@example.com",
    role: "Product Manager",
    status: "Active",
  },
  {
    id: 29,
    name: "Samuel Clark",
    email: "samuel.clark@example.com",
    role: "QA Engineer",
    status: "Inactive",
  },
  {
    id: 30,
    name: "Precious Uche",
    email: "precious.uche@example.com",
    role: "Frontend Developer",
    status: "Active",
  },
];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const UserPerPage = 10;

  let startIndex = (currentPage - 1) * UserPerPage;
  let endIndex = currentPage * UserPerPage;
  let totalPage = Math.ceil(users.length / UserPerPage);

  let visibleUsers = users.slice(startIndex, endIndex);

  //   function handlePrev() {
  //     setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1));
  //   }

  //   function handleNext() {
  //     setCurrentPage((prev) => (prev === totalPage ? totalPage : prev + 1));
  //   }

  //with disable butn

  function handlePrev() {
    setCurrentPage((prev) => prev - 1);
  }

  function handleNext() {
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col gap-6 font-serif bg-mauve-950 p-10 min-h-screen">
      <div className="flex flex-col gap-4">
        {visibleUsers.map((user) => (
          <div key={user.id} className="flex flex-col gap-1.5 bg-mauve-500 p-5">
            <div className="flex items-center gap-2 justify-between">
              <h3 className="text-2xl text-mauve-900">{user.name}</h3>
              <span className="text-xs text-mauve-50">{user.status}</span>
            </div>
            <p className="text-sm text-mauve-700">{user.email}</p>
            <span className="text-sm text-mauve-200">{user.role}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-mauve-600 text-mauve-100 text-sm py-1.5 px-5 rounded hover:bg-transparent hover:border hover:border-mauve-600 transition-all cursor-pointer"
        >
          Prev
        </button>
        <span className="text-sm text-mauve-300">
          Page {currentPage} of {totalPage}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPage}
          className="bg-mauve-600 text-mauve-100 text-sm py-1.5 px-5 rounded hover:bg-transparent hover:border hover:border-mauve-600 transition-all cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
