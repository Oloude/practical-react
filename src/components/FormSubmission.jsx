//Form Submission: Prevent default form submission and handle the data in a function.

import { useState } from "react";

function FormSubmission() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  function handleFormDataChange(propsTitle, value) {
    setFormData((prev) => ({ ...prev, [propsTitle]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      return;
    }
    console.log("form submitted");
  }
  return (
    <div className="p-10 font-serif">
      <form action="" onSubmit={handleSubmit}>
        <input
          value={formData.fullName}
          onChange={(e) => handleFormDataChange("fullName", e.target.value)}
          type="text"
          name="name"
          id=""
          placeholder="jane doe"
        />
        <input
          value={formData.email}
          onChange={(e) => handleFormDataChange("email", e.target.value)}
          type="email"
          name=""
          id=""
          placeholder="user@gmail.com"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormSubmission;
