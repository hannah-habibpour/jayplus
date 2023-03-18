import { useContext } from "react"
import BookingContext from "../../../context/BookingContext"

function TimeSlotButtonList({ date, timesSlotList }) {

  const { dateTimeSelected, setDateTimeSelected } = useContext(BookingContext)

  const handleChange = (e) => {
    setDateTimeSelected(e.currentTarget.value)
  }

  return (
    <div>
      <ul>
        {timesSlotList.map( time => (
          <li key={date + time.start}>
            <input type="radio" id={date + time.start} name="timeSlot" value={date + time.start} onChange={ handleChange } checked={ dateTimeSelected === date + time.start} />
            <label htmlFor={date + time.start}>{time.start}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimeSlotButtonList

