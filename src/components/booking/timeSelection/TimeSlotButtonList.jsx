import { useState } from "react"


function TimeSlotButtonList({ date, timesSlotList }) {
  const [selected, setSelected] = useState("")

  const handleChange = (e) => {
    setSelected(e.currentTarget.value)
  }

  return (
    <div>
      <ul>
        {timesSlotList.map( time => (
          <li key={date + time.start}>
            <input type="radio" id={date + time.start} name="timeSlot" value={date + time.start} onChange={ handleChange } checked={ selected === date + time.start} />
            <label htmlFor={date + time.start}>{time.start}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimeSlotButtonList

