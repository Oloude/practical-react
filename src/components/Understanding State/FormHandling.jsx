import React, { useState } from 'react'

function FormHandling() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password : '',
        confirmPassword : ''
    })

    function handleFormDataChange(propTitle, value){
        setFormData(prev => ({...prev, [propTitle]: value}))
    }

  return (
    <div className='flex p-10 flex-col'>
        <form action="" className='grid grid-cols-1 gap-3'>
            <input type="text" name="fullname" id="" placeholder='Fullname' onChange={(e)=> handleFormDataChange(e.target.name, e.target.value)}/>
            <input type="email" name="email" id="" placeholder='Email' onChange={(e)=> handleFormDataChange(e.target.name, e.target.value)} />
            <input type="password" name="password" id="" placeholder='Password' onChange={(e)=> handleFormDataChange(e.target.name, e.target.value)}/>
            <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' onChange={(e)=> handleFormDataChange(e.target.name, e.target.value)} />
        </form>
    </div>
  )
}

export default FormHandling