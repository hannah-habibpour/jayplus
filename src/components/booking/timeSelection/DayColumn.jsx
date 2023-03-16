import DayColumnHeader from './DayColumnHeader'
import TimeSlotButtonList from './TimeSlotButtonList'

function DayColumn({date, time}) {
  return (
    <div>
        <DayColumnHeader date={date} />
        <TimeSlotButtonList time={time} />
    </div>
  )
}

export default DayColumn