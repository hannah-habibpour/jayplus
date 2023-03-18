import CalendarView from "./timeSelection/CalendarView"

import { TimeSelectionProvidor } from "../../context/TimeSelectionContext"

function TimeSelection() {
  return (
    <TimeSelectionProvidor>
      <section id="time-selection">
        <h3>Time Selection</h3>
        <CalendarView />
      </section>
    </TimeSelectionProvidor>
    
  )
}

export default TimeSelection