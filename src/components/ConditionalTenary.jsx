//Conditional Rendering (Ternary): Render "Login" if isLoggedIn is false, and "Dashboard" if true.

import { useState } from "react";

function ConditionalTenary() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleIsLoggedin() {
    setIsLoggedIn((prev) => !prev);
  }
  return (
    <div className="p-6 font-mono">
      {isLoggedIn ? (
        <Dashboard onClick={handleIsLoggedin} />
      ) : (
        <button
          onClick={handleIsLoggedin}
          className="bg-amber-400 text-mauve-700 text-sm px-4 py-2 cursor-pointer"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default ConditionalTenary;

function Dashboard({ onClick }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl text-mauve-900">Dashboard</h1>
      <button onClick={onClick} className="bg-violet-400 text-white text-sm py-2 cursor-pointer">
        Logout
      </button>
    </div>
  );
}
