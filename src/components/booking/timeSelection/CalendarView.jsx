import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {
  return (
    <div>
    <UpdateDayButton children='Backward'/>
    <UpdateDayButton children='Forward'/>
    <DayColumnList />
    </div>
  )
}

export default CalendarView

