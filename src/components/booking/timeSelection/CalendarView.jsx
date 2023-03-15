import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {
  return (
    <div className="flex w-full justify-between">
    <UpdateDayButton children='Backward'/>
    <DayColumnList />
    <UpdateDayButton children='Forward'/>
    
    </div>
  )
}

export default CalendarView

