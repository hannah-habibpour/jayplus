import { useState } from "react"
import { todaysDate } from "../../../utilities/utils"
import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {

  const [ startDate, setStartDate ] = useState(todaysDate())

  const changeDate = (by) => {
    if ( by === 1 ) {
        setStartDate("2023-01-21")
    } else if ( by === -1 ) {
        setStartDate("2023-01-19")
    } else {
        setStartDate(todaysDate())
    }
  } 

  return (
    <div className="flex w-full justify-between">
      <div>
        <UpdateDayButton children='<<' changeDate={changeDate} />
      </div>
      <DayColumnList dateTimeList={startDate} />
      <div>
        <UpdateDayButton children='>>' changeDate={changeDate} />
      </div>
    </div>
  )
}

export default CalendarView

