import React from 'react'

const Button = ({name , classname,clickHandler}) => {
  return (
    <button className={classname} onClick={clickHandler}>{name}</button>
  )
}

export default Button