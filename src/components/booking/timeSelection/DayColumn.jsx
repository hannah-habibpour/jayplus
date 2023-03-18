import DayColumnHeader from './DayColumnHeader'
import TimeSlotButtonList from './TimeSlotButtonList'

function DayColumn({date, timeSlotList}) {
  return (
    <div>
        <DayColumnHeader date={date} />
        <TimeSlotButtonList date={date} timesSlotList={timeSlotList} />
    </div>
  )
}

export default DayColumn