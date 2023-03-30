import { useState, useContext } from "react"
import BookingContext from "../../../context/BookingContext"

import { calculatePrice } from "../../../utilities/utils"

function TypeList({ types, select }) {

  // Set the default selected type to the first type in the types list
  const [selected, setSelected] = useState(types.types[0].name)
  // Function received as a prop from the parent component that is called when a type is selected.
  // Function passes the state to parent component, which then sets the state in context.
  select(selected)

  // State to determine if the type is hovered over
  const [isHovered, setIshovered] = useState(null)
  
  // Styles for the list item
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

  // Styles for the list item when hovered over
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

  // Styles for the label
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

  // Retrieve the state of vehicleTypeSelected and serviceTypeSelected from context to calculate the price
  // setServiceCost are also retrieved from context to reset the service cost when a new type is selected
  // setDateTimeSelected is also retrieved from context to deselect the date and time when a new type is selected
  const { vehicleTypeSelected, serviceTypeSelected, setServiceCost, setDateTimeSelected } = useContext(BookingContext)
  
  // Calculate the price when a new type is selected and set the service cost in context
  setServiceCost(calculatePrice(vehicleTypeSelected, serviceTypeSelected))
  
  // Function to handle the change of the type selected
  const handleChange = (e) => {
    // Set the state of selected to the value of the type selected
    setSelected(e.currentTarget.value)
    // Call the function received as a prop from the parent component to set the state in context
    select(e.currentTarget.value)
    // Calculate the price when a new type is selected and set the service cost in context
    setServiceCost(calculatePrice(vehicleTypeSelected, serviceTypeSelected))
    // Deselect the date and time when a new type is selected
    setDateTimeSelected("")
  }


  return (
    <div id="type-list" className="items-center justify-between mt-2">
        <ul className="flex gap-2">
          {types.types.map( type => ( // Map through the types list and return a list item for each type
            <li 
              className="border-2 w-1/4 text-center"
              key={ type.id } 
              style={isHovered === type.id ? liHoveredStyle : liStyle} // Change the style of the list item when hovered over
              onMouseEnter={() => setIshovered(type.id)} // Set the state of isHovered to the id of the type hovered over
              onMouseLeave={() => setIshovered(null)}> {/* Set the state of isHovered to null when the mouse leaves the type */}
              <input 
                className="hidden" // Hide the radio button
                type="radio"
                id={type.id}
                name={types.name}
                value={type.name}
                onChange={handleChange} // Call the handleChange function when the type is selected
                checked={ selected === type.name } /> {/* Check if the type is selected */}
              <label 
                htmlFor={type.id}
                className="flex flex-col items-center justify-center"
                style={labelStyle}>
                <img 
                  src={type.icon}
                  alt="" />
                {/* Change this to something more sustainable */}
                <span style={{ fontSize: type.name === "Large SUV / Truck" && "10px" }}>{type.name}</span>
              </label>
            </li>
          ))}
        </ul>
    </div>
  )
}


export default TypeList