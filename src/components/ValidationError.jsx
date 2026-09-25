// Validation (Error Messages): Display specific error text if an email format is invalid or password is too short.

import { useState } from "react";

function ValidationError() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    emailError: "",
    passwordError: "",
  });

  function handleFormValueChange(propTitle, value) {
    setFormData((prev) => ({
      ...prev,
      [propTitle]: value,
    }));
  }

//   function handleSubmit() {
//     setFormError({
//     emailError: "",
//     passwordError: "",
//   })

//     if(!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
//         setFormError(prev => ({...prev, emailError: 'invalid email'}))
//         return
//     }
//     if(!formData.password.trim() || formData.password.trim().length < 6){
//         setFormError(prev => ({...prev, passwordError: 'password is too short'}))
//         return
//     }

//     console.log('Form submitted', formData)
//   }

function handleSubmit() {
  const errors = {
    emailError: "",
    passwordError: "",
  };

  if (
    !formData.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.emailError = "Invalid email";
  }

  if (
    !formData.password.trim() ||
    formData.password.trim().length < 6
  ) {
    errors.passwordError = "Password must be at least 6 characters";
  }

  setFormError(errors);

  if (errors.emailError || errors.passwordError) {
    return;
  }

  console.log("Form submitted", formData);
}

  return (
    <div className="flex flex-col gap-6 p-6 font-serif bg-mauve-100 h-screen">
      <input
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={(e) => handleFormValueChange("email", e.target.value)}
        className="border border-mauve-950 text-sm text-mauve-500 p-2 outline-none"
      />
      {formError.emailError &&<span className="text-xs text-red-500">{formError.emailError}</span>}
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(e) => handleFormValueChange("password", e.target.value)}
        className="border border-mauve-950 text-sm text-mauve-500 p-2 outline-none"
      />
      {formError.passwordError && <span className="text-xs text-red-500">{formError.passwordError}</span>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ValidationError;
