import React from 'react'

const InputRange = ({min,max,onChange,value}) => {
  return (
    <div className='range'>
        <label>Character Length</label>
        <input type='range' 
        min={min} 
        max={max} onChange={onChange}
        value={value}/>
        <div>
          <span>{min}</span>
          <span>{value}</span>
          <span>{max}</span>
        </div>
    </div>

  )
}

export default InputRange