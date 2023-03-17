import { useState } from 'react'
import Button from "../../shared/all/Button"


function TypeList({ types, select }) {

  const [ selected, setSelected ] = useState("Sedan")

  const handleChange = (e) => {
    setSelected(e.currentTarget.value)
    select(e.currentTarget.value)
  }

  return (
    <div id="type-list" className="flex gap-4">
        <ul className='flex gap-4'>
          {types.map( type => (
            <li key={ type.id }>
              <input type="radio" id={type.id} name="type" value={type.name} onChange={handleChange} checked={ selected ===  type.name } />
              <label htmlFor={type.id}>{type.name}</label>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TypeList