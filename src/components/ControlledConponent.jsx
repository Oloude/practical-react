// Controlled Components: Build an input where the value is strictly tied to useState.

import { useState } from "react";

function ControlledConponent() {
  const [fullname, setFullname] = useState("");

  function handleFullnameChange(value) {
    setFullname(value);
  }
  return (
    <div className="p-10 font-serif">
      <input
        type="text"
        placeholder="jane doe"
        value={fullname}
        onChange={(e) => handleFullnameChange(e.target.value)}
        className="border-mauve-800 border rounded-md outline-none text-sm text-mauve-400 p-2"
      />
      <p>Fullname : {fullname}</p>
    </div>
  );
}

export default ControlledConponent;
