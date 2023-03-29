import { useState } from "react"
import { addDaysToDate, todaysDate, dateToNumber } from "../../../utilities/utils"
import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {

  const [ startDate, setStartDate ] = useState("2023-01-20")

  const changeDate = (by) => {
    setStartDate(addDaysToDate(startDate, by))
  }

  const isDisabled = dateToNumber(startDate) <= dateToNumber(todaysDate())
  
  return (
    <div className="flex w-full justify-between gap-2 mt-2">
      <div>
        <UpdateDayButton type="backward" changeDate={changeDate} disabled={isDisabled}>
          <img src="backward.svg" alt="" />
        </UpdateDayButton>
      </div>
      <DayColumnList startDate={startDate} />
      <div>
      <UpdateDayButton type="forward" changeDate={changeDate}>
        <img src="forward.svg" alt="" /> 
      </UpdateDayButton>
      </div>
    </div>
  )
}

export default CalendarView

