import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {
  return (
    <div className="flex w-full justify-between">
      <div>
        <UpdateDayButton children='Backward'/>
      </div>
      <DayColumnList />
      <div>
        <UpdateDayButton children='Forward'/>
      </div>
    </div>
  )
}

export default CalendarView

