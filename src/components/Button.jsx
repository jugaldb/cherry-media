import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


function Button(
  children,
  type,
  onClick,
  buttonSize) {
  const SIZES = ['btn--small', 'btn--large'];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <></>
    // <button
    //   className={`btn ${checkButtonSize}`}
    //   onClick={onClick}
    //   type={type}
    // >
    //   <Link to='/'>{children}</Link>
    // </button>

  )
}

export default Button