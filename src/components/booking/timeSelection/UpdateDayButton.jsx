import React from 'react'

function UpdateDayButton({ children, type, changeDate, disabled }) {

  const handleClick = () => {
    type === "forward" ? changeDate(1) : changeDate(-1)
  }
  
  const buttonStyle = {
    background: process.env.REACT_APP_ACTIVE_ACTION_BUTTON_COLOR_DARK,
    height: "50px",
    width: "25px",
    padding: "0px"
  }
  return (
    <button style={buttonStyle} className={` hover:bg-gray-500 px-2 rounded ${disabled ? "opacity-50 cursor-not-allowed" : ""} flex justify-center items-center`} onClick={handleClick} disabled={disabled} >
     { children }
    </button>
  )
}

export default UpdateDayButton

// event handler to give action