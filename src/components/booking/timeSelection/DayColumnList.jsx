import DayColumn from "./DayColumn"

function DayColumnList() {
  return (
    <div className="grid grid-cols-3 gap-2">
        <DayColumn />
        <DayColumn />
        <DayColumn />
    </div>
  )
}

export default DayColumnList