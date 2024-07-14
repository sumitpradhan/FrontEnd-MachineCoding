import React from 'react'

const SliderComp = ({label,value,onValueChange,minVal,maxVal}) => {
  return (
    <div className='inputComp'>
        <label for ={label}>{label}</label>
        <input
         id={label} 
         value={value}  
         type="range" 
         min={minVal} 
         max ={maxVal}
         onChange={onValueChange}
         />
         <div className='sliderOutput'>
            <span>{minVal}</span>
            <span>{label} = {value} ₹</span>
            <span>{maxVal}</span>
         </div>
    </div>
  )
}

export default SliderComp