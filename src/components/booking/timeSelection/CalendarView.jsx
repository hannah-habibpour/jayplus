import { useState } from "react"
import { todaysDate } from "../../../utilities/utils"
import UpdateDayButton from "./UpdateDayButton"
import DayColumnList from "./DayColumnList"

function CalendarView() {
  const dateTimeList = {
    "2023-01-20": [
        {
            "start": "09:00",
            "end": "10:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "10:00",
            "end": "11:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "11:00",
            "end": "12:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "12:00",
            "end": "13:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "13:00",
            "end": "14:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "14:00",
            "end": "15:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "15:00",
            "end": "16:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "16:00",
            "end": "17:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "17:00",
            "end": "18:00",
            "freeMinutes": 180,
            "available": false,
            "isPast": true
        }
    ],
    "2023-01-21": [
        {
            "start": "09:00",
            "end": "10:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "10:00",
            "end": "11:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "11:00",
            "end": "12:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "12:00",
            "end": "13:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "13:00",
            "end": "14:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "14:00",
            "end": "15:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "15:00",
            "end": "16:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "16:00",
            "end": "17:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "17:00",
            "end": "18:00",
            "freeMinutes": 180,
            "available": false,
            "isPast": true
        }
    ],
    "2023-01-22": [
        {
            "start": "09:00",
            "end": "10:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "10:00",
            "end": "11:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "11:00",
            "end": "12:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "12:00",
            "end": "13:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "13:00",
            "end": "14:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "14:00",
            "end": "15:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "15:00",
            "end": "16:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "16:00",
            "end": "17:00",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "17:00",
            "end": "18:00",
            "freeMinutes": 180,
            "available": false,
            "isPast": true
        }
    ]
  }

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
      <DayColumnList dateTimeList={dateTimeList} />
      <div>
        <UpdateDayButton children='>>' changeDate={changeDate} />
      </div>
    </div>
  )
}

export default CalendarView

