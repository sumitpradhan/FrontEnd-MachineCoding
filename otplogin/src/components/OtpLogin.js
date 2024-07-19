import React, { useEffect, useRef, useState } from 'react'

const OtpLogin = ({length =4 , onOtpSubmit =()=>{}}) => {
  const [otp,setOtp]=useState(new Array(length).fill(""));
  const inputRef= useRef([]);

  const handleChange =(e,index) => {
    const value =e.target.value;
    const newOtp =[...otp];
    newOtp[index]= value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);


    if(value && index<length-1 && inputRef.current[index + 1])
    {
        inputRef.current[index+1].focus()
    }
  }


  const handleKeyDown = (e,index) =>{
    if (
        e.key === "Backspace" &&
        !otp[index] &&
        index > 0 &&
        inputRef.current[index - 1]
      ) {
        // Move focus to the previous input field on backspace
        inputRef.current[index - 1].focus();
      }
  }

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
  };

  useEffect(() =>{
    console.log(inputRef.current)
    inputRef.current[0].focus()
  },[])

  console.log(inputRef.current)
  return (
    <div>
        {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            className="otpInput"
            ref={(input) => (inputRef.current[index] = input)}
            value={value}
            onChange={(e)=>handleChange(e,index)}
            onKeyDown={(e)=>handleKeyDown(e,index)}
            onClick={() => handleClick(index)}
          />
            );
        })}
    </div>
  )
}

export default OtpLogin