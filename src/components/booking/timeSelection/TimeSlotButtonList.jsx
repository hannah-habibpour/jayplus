import { useContext, useState } from "react"
import BookingContext from "../../../context/BookingContext"

function TimeSlotButtonList({ date, timesSlotList }) {

  const { dateTimeSelected, setDateTimeSelected } = useContext(BookingContext)

  const handleChange = (e) => {
    setDateTimeSelected(e.currentTarget.value)
  }

  const [isHovered, setIshovered] = useState(null)

  const liStyle = {
    position: "relative",
    background: process.env.REACT_APP_CANELDAR_TIMESLOT_BUTTON_COLOR,
    height: "50px",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "13px",
    border: "0px #eee solid",
    transition: "0.3s",
  }

  const liHoveredStyle = {
    position: "relative",
    background: process.env.REACT_APP_ACTIVE_INPUT_BUTTON_COLOR,
    height: "50px",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "13px",
    border: "0px #eee solid",
    transition: "0.3s",
  }

  const labelStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "50px",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
    cursor: "pointer"
  }

  const liDisabledStyle = {
    position: "relative",
    background: process.env.REACT_APP_INACTIVE_CANELDAR_TIMESLOT_BUTTON_COLOR,
    height: "50px",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "13px",
    border: "0px #eee solid",
    transition: "0.3s",
  }

  const labelDisabledStyle = {
    opacity: "50%",
    background: process.env.REACT_APP_INACTIVE_CANELDAR_TIMESLOT_BUTTON_COLOR,
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "50px",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
    cursor: "not-allowed",
  }

  return (
    <div id="time-list">
      <ul>
        {timesSlotList.map( time => (
          <li 
            key={date + time.start}
            className="mb-4"
            style={
              !time.isPast
              ? liDisabledStyle
              : isHovered === date + time.start 
              ? liHoveredStyle
              : liStyle}
            onMouseEnter={() => setIshovered(date + time.start)}
            onMouseLeave={() => setIshovered(null)}>
            <input type="radio" id={date + time.start} className="hidden" name="timeSlot" value={date + time.start} onChange={ handleChange } checked={ dateTimeSelected === date + time.start}/>
            <label htmlFor={date + time.start} className="flex flex-col items-center justify-center" style={!time.isPast ? labelDisabledStyle : labelStyle} onClick={!time.isPast ? e => e.preventDefault() : null}>{time.start}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimeSlotButtonList

