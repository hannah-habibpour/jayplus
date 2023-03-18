import Button from "../../shared/all/Button"
import { useState } from "react"


function NumberOfTimeButtons() {
  const [timeSelected, setTimeSelected] = useState("09:00 AM")

  const handleChange = (e) => {}

  return (
    <div>
      <ul>
        <li>
          <input type="radio" id="09:00 AM" name="timeSlot" value="09:00 AM" onChange={ handleChange } checked={ timeSelected === "09:00 AM"} />
          <label htmlFor="09:00 AM">09:00 AM</label>
        </li>
        <li>
          <input type="radio" id="10:00 AM" name="timeSlot" value="10:00 AM" onChange={ handleChange } checked={ timeSelected === "10:00 AM"} />
          <label htmlFor="09:00 AM">10:00 AM</label>
        </li>
        <li>
          <input type="radio" id="11:00 AM" name="timeSlot" value="11:00 AM" onChange={ handleChange } checked={ timeSelected === "11:00 AM"} />
          <label htmlFor="11:00 AM">11:00 AM</label>
        </li>
        <li>
          <input type="radio" id="12:00 PM" name="timeSlot" value="12:00 PM" onChange={ handleChange } checked={ timeSelected === "12:00 PM"} />
          <label htmlFor="12:00 PM">12:00 PM</label>
        </li>
        <li>
          <input type="radio" id="01:00 PM" name="timeSlot" value="01:00 PM" onChange={ handleChange } checked={ timeSelected === "01:00 PM"} />
          <label htmlFor="01:00 PM">01:00 PM</label>
        </li>
        <li>
          <input type="radio" id="02:00 PM" name="timeSlot" value="02:00 PM" onChange={ handleChange } checked={ timeSelected === "02:00 PM"} />
          <label htmlFor="09:00 AM">02:00 PM</label>
        </li>
        <li>
          <input type="radio" id="03:00 PM" name="timeSlot" value="03:00 PM" onChange={ handleChange } checked={ timeSelected === "03:00 PM"} />
          <label htmlFor="03:00 PM">03:00 PM</label>
        </li>
        <li>
          <input type="radio" id="04:00 PM" name="timeSlot" value="04:00 PM" onChange={ handleChange } checked={ timeSelected === "04:00 PM"} />
          <label htmlFor="04:00 PM">04:00 PM</label>
        </li>
        <li>
          <input type="radio" id="05:00 PM" name="timeSlot" value="05:00 PM" onChange={ handleChange } checked={ timeSelected === "05:00 PM"} />
          <label htmlFor="05:00 PM">05:00 PM</label>
        </li>
      </ul>
    </div>
  )
}

export default NumberOfTimeButtons




// function NumberOfTimeButtons({time}) {
//   return (
//     <div className="grid grid-flow-row gap-2">
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//         <Button children={time} />
//     </div>
    
//   )
// }

// export default NumberOfTimeButtons