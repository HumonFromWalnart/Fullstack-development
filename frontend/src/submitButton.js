import React from 'react'
import './signUp.css'

const SubmitButton = (props) => {
  const { onClick } = props
  return (
    <button id="submitButton" onClick={onClick} >Sign Up</button>
  )
}

export default SubmitButton;