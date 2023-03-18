import DayColumn from "./DayColumn"

function DayColumnList() {
  const dateTimeList = {
    "2023-01-20": [
        {
            "start": "2023-01-20T09:00:00.000000Z",
            "end": "2023-01-20T10:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T10:00:00.000000Z",
            "end": "2023-01-20T11:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T11:00:00.000000Z",
            "end": "2023-01-20T12:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T12:00:00.000000Z",
            "end": "2023-01-20T13:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T13:00:00.000000Z",
            "end": "2023-01-20T14:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T14:00:00.000000Z",
            "end": "2023-01-20T15:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T15:00:00.000000Z",
            "end": "2023-01-20T16:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T16:00:00.000000Z",
            "end": "2023-01-20T17:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-20T17:00:00.000000Z",
            "end": "2023-01-20T18:00:00.000000Z",
            "freeMinutes": 180,
            "available": false,
            "isPast": true
        }
    ],
    "2023-01-21": [
        {
            "start": "2023-01-21T09:00:00.000000Z",
            "end": "2023-01-21T10:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T10:00:00.000000Z",
            "end": "2023-01-21T11:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T11:00:00.000000Z",
            "end": "2023-01-21T12:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T12:00:00.000000Z",
            "end": "2023-01-21T13:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T13:00:00.000000Z",
            "end": "2023-01-21T14:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T14:00:00.000000Z",
            "end": "2023-01-21T15:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T15:00:00.000000Z",
            "end": "2023-01-21T16:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T16:00:00.000000Z",
            "end": "2023-01-21T17:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-21T17:00:00.000000Z",
            "end": "2023-01-21T18:00:00.000000Z",
            "freeMinutes": 180,
            "available": false,
            "isPast": true
        }
    ],
    "2023-01-22": [
        {
            "start": "2023-01-22T09:00:00.000000Z",
            "end": "2023-01-22T10:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T10:00:00.000000Z",
            "end": "2023-01-22T11:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T11:00:00.000000Z",
            "end": "2023-01-22T12:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T12:00:00.000000Z",
            "end": "2023-01-22T13:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T13:00:00.000000Z",
            "end": "2023-01-22T14:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T14:00:00.000000Z",
            "end": "2023-01-22T15:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T15:00:00.000000Z",
            "end": "2023-01-22T16:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T16:00:00.000000Z",
            "end": "2023-01-22T17:00:00.000000Z",
            "freeMinutes": 270,
            "available": false,
            "isPast": true
        },
        {
            "start": "2023-01-22T17:00:00.000000Z",
            "end": "2023-01-22T18:00:00.000000Z",
            "freeMinutes": 180,
            "available": false,
            "isPast": true
        }
    ]
  }

  return (
    <div className="grid grid-cols-3 gap-2 w-full justify-between text-center">
        <DayColumn date='2023-01-20' time='00:00'/>
        <DayColumn date='2023-01-21' time='00:00'/>
        <DayColumn date='2023-01-22' time='00:00'/>
    </div>
  )
}

export default DayColumnList