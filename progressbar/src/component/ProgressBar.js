import React, { useEffect, useState } from 'react'

const ProgressBar = ({value=0}) => {
  const [percent,setPercent] =useState(value);
  
  useEffect(()=>{
    setPercent(Math.min( value,100))
  },[value])

  return (
    <div className='progressBar'>
        <span style={{color:percent>49?'white':'black'}}>{percent} %</span>
        <div style={{
            width:`${percent}%`
        }}/>
    </div>
  )
}

export default ProgressBar