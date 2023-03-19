import { useState } from "react"
import { addDaysToDate, todaysDate } from "../../../utilities/utils"
import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {

  const [ startDate, setStartDate ] = useState("2023-01-20")

  const changeDate = (by) => {
    setStartDate(addDaysToDate(startDate, by))
  }

  const isDisabled = startDate === todaysDate()
  
  return (
    <div className="flex w-full justify-between">
      <div>
        <UpdateDayButton children='<<' changeDate={changeDate} disabled={isDisabled} />
      </div>
      <DayColumnList startDate={startDate} />
      <div>
        <UpdateDayButton children='>>' changeDate={changeDate} />
      </div>
    </div>
  )
}

export default CalendarView

