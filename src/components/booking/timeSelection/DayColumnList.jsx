import { todaysDate } from "../../../utilities/utils"

import DayColumn from "./DayColumn"

function DayColumnList({ startDate }) {

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

  return (
    <div className="grid grid-cols-3 gap-2 w-full justify-between text-center">  
        {Object.entries(dateTimeList).map(([key, value]) => (
            <DayColumn key={key} date={key} timeSlotList={value} />
        ))}
    </div>
  )
}

export default DayColumnList