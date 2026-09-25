//Validation (Basic): Disable the "Submit" button if required fields are empty.

// function ValidationBasic() {
//     const [formData, setFormData] = useState({
//         firstName : '', 
//         lastName : '',
//     })
//     const [disabled, setDisabled] = useState(false)

//     function handleFormValueChange(propTitle, value){
//         setFormData(prev => ({...prev, [propTitle] : value}))
//         // setDisabled(false)
//     }

//     // function handleFormSubmit(e){
//     //     e.target.disabled = false
//     //     if(!formData.firstName.trim() || !formData.lastName.trim()){
//     //       e.target.disabled  = true
//     //         return
//     //     }
//     // }

//     function handleFormSubmit(){
//         setDisabled(false)
//         if(!formData.firstName.trim() || !formData.lastName.trim()){
//             setDisabled(true)
//             return
//         }
        
//         console.log('form submitted', formData)
//     }

//   return <div className="p-10 flex flex-col gap-5 bg-mauve-100 h-screen font-serif">
//     <input type="text" name="" id="" placeholder='First name' value={formData.firstName} onChange={(e) => handleFormValueChange('firstName', e.target.value)} className="border border-mauve-950 text-sm text-mauve-500 outline-none" />
//     <input type="text" name="" id="" placeholder='Last Name' value={formData.lastName} onChange={(e) => handleFormValueChange('lastName', e.target.value)} className="border border-mauve-950 text-sm text-mauve-500 outline-none" />
//     <button disabled={disabled} onClick={handleFormSubmit} className="disabled:text-mauve-500 text-mauve-950">Submit</button>
//   </div>;
// }

import { useState } from "react";

function ValidationBasic() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    });

    function handleFormValueChange(propTitle, value) {
        setFormData((prev) => ({
            ...prev,
            [propTitle]: value,
        }));
    }

    function handleFormSubmit() {
        console.log("form submitted", formData);
    }

    const isSubmitDisabled =
        !formData.firstName.trim() ||
        !formData.lastName.trim();

    return (
        <div className="p-10 flex flex-col gap-5 bg-mauve-100 h-screen font-serif">
            <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) =>
                    handleFormValueChange("firstName", e.target.value)
                }
                className="border border-mauve-950 text-sm text-mauve-500 outline-none"
            />

            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                    handleFormValueChange("lastName", e.target.value)
                }
                className="border border-mauve-950 text-sm text-mauve-500 outline-none"
            />

            <button
                disabled={isSubmitDisabled}
                onClick={handleFormSubmit}
                className="disabled:text-mauve-500 text-mauve-950"
            >
                Submit
            </button>
        </div>
    );
}


export default ValidationBasic;
