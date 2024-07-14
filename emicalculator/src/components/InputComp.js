import React from 'react'

const InputComp = ({label,value,onValueChange}) => {
  return (
    <div className='inputComp'>
        <label for={label}>{label}</label>
        <input id={label} value={value} onChange={(e)=>onValueChange(e.target.value)} type='number'/>
    </div>
  )
}

export default InputComp