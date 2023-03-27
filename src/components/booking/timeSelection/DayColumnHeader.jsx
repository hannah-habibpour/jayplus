import React from 'react'

function DayColumnHeader({date}) {
  
  const headerStyle = {
    position: "relative",
    background: "#CED4DA",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "19px",
    border: "0px #eee solid",
    transition: "0.3s"
  }
  
  return (
    <div id="date-header" className="mb-4" style={headerStyle}>{date}</div>
  )
}

export default DayColumnHeader