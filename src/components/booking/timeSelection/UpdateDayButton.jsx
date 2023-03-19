import React from 'react'

function UpdateDayButton({ children, changeDate }) {

  const handleClick = () => {
    children === ">>" ? changeDate(1) : changeDate(-1)
  } 
  return (
    <button className="bg-gray-500 hover:bg-gray-700 text-white px-2 rounded" onClick={handleClick} >
     { children }
    </button>
  )
}

export default UpdateDayButton

// event handler to give action