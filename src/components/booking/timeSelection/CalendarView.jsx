import { useState } from "react"
import { todaysDate, addDaysToDate } from "../../../utilities/utils"
import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {

  const [ startDate, setStartDate ] = useState("2023-01-20")

  const changeDate = (by) => {
    setStartDate(addDaysToDate(startDate, by))
  }
  
  return (
    <div className="flex w-full justify-between">
      <div>
        <UpdateDayButton children='<<' changeDate={changeDate} />
      </div>
      <DayColumnList startDate={startDate} />
      <div>
        <UpdateDayButton children='>>' changeDate={changeDate} />
      </div>
    </div>
  )
}

export default CalendarView

