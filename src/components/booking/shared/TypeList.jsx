import { useState, useContext } from "react"
import BookingContext from "../../../context/BookingContext"

import { calculatePrice } from "../../../utilities/utils"

function TypeList({ types, select }) {

  const [ selected, setSelected ] = useState(types.types[0].name)
  select(selected)

  const [isHovered, setIshovered] = useState(null)
  
  const liStyle = {
    position: "relative",
    background: process.env.REACT_APP_INACTIVE_INPUT_BUTTON_COLOR,
    height: "80px",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "13px", // Change this later to a bit larger
    border: "0px #eee solid",
    transition: "0.3s",
  }

  const liHoveredStyle = {
    position: "relative",
    background: process.env.REACT_APP_ACTIVE_INPUT_BUTTON_COLOR,
    height: "80px",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    border: "0px #eee solid",
    transition: "0.3s",
  }

  const labelStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "80px",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
    cursor: "pointer"
  }

  const { vehicleTypeSelected, serviceTypeSelected, setServiceCost, setDateTimeSelected } = useContext(BookingContext)
  
  setServiceCost(calculatePrice(vehicleTypeSelected, serviceTypeSelected))
  
  const handleChange = (e) => {
    setSelected(e.currentTarget.value)
    select(e.currentTarget.value)
    setServiceCost(calculatePrice(vehicleTypeSelected, serviceTypeSelected))
    setDateTimeSelected("")
  }


  return (
    <div id="type-list" className="items-center justify-between mt-2">
        <ul className="flex gap-2">
          {types.types.map( type => (
            <li className="border-2 w-1/4 text-center" key={ type.id } style={isHovered === type.id ? liHoveredStyle : liStyle} onMouseEnter={() => setIshovered(type.id)} onMouseLeave={() => setIshovered(null)}>
              <input className="hidden" type="radio" id={type.id} name={types.name} value={type.name} onChange={handleChange} checked={ selected ===  type.name } />
              <label htmlFor={type.id} className="flex flex-col items-center justify-center" style={labelStyle}>
                <img src={type.icon} alt="" />
                <span>{type.name}</span>
              </label>
            </li>
          ))}
        </ul>
    </div>
  )
}


export default TypeList