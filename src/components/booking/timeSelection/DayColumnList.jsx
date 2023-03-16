import DayColumn from "./DayColumn"

function DayColumnList() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full justify-between text-center">
        <DayColumn date='2023-01-20' time='00:00'/>
        <DayColumn date='2023-01-21' time='00:00'/>
        <DayColumn date='2023-01-22' time='00:00'/>
    </div>
  )
}

export default DayColumnList