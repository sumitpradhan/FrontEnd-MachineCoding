import React, { useState } from 'react'
import OtpLogin from './OtpLogin';

const PhoneLogin = () => {
  const[phoneNumber,setPhoneNumber]=useState("");
  const [showOtpInput,setShowOtpInput]=useState(false);
  const handlePhoneNumber = (e) =>{
    setPhoneNumber(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtpInput(true);
  }

  const handleOtpSubmit = (otp) =>{
    console.log("Login sucessfull")
  }

  return (
    <div>
        <h1>Phone Login</h1>
        {!showOtpInput?
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Phone Number'
                value={phoneNumber}
                onChange={handlePhoneNumber}            
            />
            <button type='submit'>Submit</button>
        </form>:<OtpLogin length={4} onOtpSubmit={handleOtpSubmit}/>}
    </div>
  )
}

export default PhoneLogin