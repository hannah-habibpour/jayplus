import React from 'react'

function UpdateDayButton({ children }) {
  return (
    <button className="bg-gray-500 hover:bg-gray-700 text-white px-2 rounded">
     { children }
    </button>
  )
}

export default UpdateDayButton

// event handler to give action