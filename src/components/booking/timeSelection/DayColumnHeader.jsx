import React from 'react'

function DayColumnHeader({date}) {
  
  const headerStyle = {
    background: process.env.REACT_APP_ACTIVE_ACTION_BUTTON_COLOR,
    height: "50px",
    borderRadius: "5px",
    fontSize: "14px",
    border: "0px #eee solid",
  }
  
  return (
    <div id="date-header" className="mb-4 flex justify-center items-center" style={headerStyle}>{date}</div>
  )
}

export default DayColumnHeader