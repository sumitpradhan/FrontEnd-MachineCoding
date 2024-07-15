import React, { useState } from 'react'
import Button from './userInput/Button'
import InputRange from './userInput/InputRange';
import CheckBox from './userInput/CheckBox';
import usePasswordGenerator from '../hooks/usePasswordGenerator';

const PasswordGenerator = () => {
  const [copied,setCopied] =useState(false);
  const [pwdLen,setPwdLen]=useState(0);
  const [checkbox,setCheckBox] =useState([
    {title:"Include Uppercase Letters",state:false},
    {title:"Include Lowercase Letters",state:false},
    {title:"Include Number",state:false},
    {title:"Include Symbols",state:false}
  ])
  const {password,generatePassword} = usePasswordGenerator();

  const copyBtnClick =() =>{
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const handleCheckboxClick =(index)=>{
    const prevCheck= [...checkbox];
    prevCheck[index].state=!prevCheck[index]?.state;
    setCheckBox(prevCheck);
  }

  return (
    <div className='pwdBody'>
        <div className='header'>
            <span>Password: {password}</span>
            <Button clickHandler={copyBtnClick}  classname="copy-btn" name={copied?"copied":"copy"}/>
        </div>

        <div className='inputContainer' >
           <InputRange 
           min={7} 
           max={20} 
           onChange={(e)=>setPwdLen((Number(e.target.value)))}
           value={pwdLen}/>

           <div>
           { checkbox.map((c,index)=>{
                return  <CheckBox title={c?.title} 
                onChange={()=>handleCheckboxClick(index)}
                state={c?.state}
                key={index}/>
           }) }
           </div>
       
        </div>

        <div>
            <Button clickHandler={()=>generatePassword(pwdLen,checkbox)} classname="generate-btn" name="Generate Password"/>
        </div>
    </div>
  )
}

export default PasswordGenerator