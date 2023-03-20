import { useState, useContext } from "react"
import BookingContext from "../../../context/BookingContext"

import { calculatePrice } from "../../../utilities/utils"

function TypeList({ types, select }) {

  const [ selected, setSelected ] = useState(types.types[0].name)
  select(selected)
  
  const { vehicleTypeSelected, serviceTypeSelected, setServiceCost, setDateTimeSelected } = useContext(BookingContext)
  
  setServiceCost(calculatePrice(vehicleTypeSelected, serviceTypeSelected))
  
  const handleChange = (e) => {
    setSelected(e.currentTarget.value)
    select(e.currentTarget.value)
    setServiceCost(calculatePrice(vehicleTypeSelected, serviceTypeSelected))
    setDateTimeSelected("")
  }

  return (
    <div id="type-list" className="flex gap-4">
        <ul className='flex gap-4'>
          {types.types.map( type => (
            <li key={ type.id }>
              <input type="radio" id={type.id} name={types.name} value={type.name} onChange={handleChange} checked={ selected ===  type.name } />
              <label htmlFor={type.id}>{type.name}</label>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TypeList