export const calculatePrice = (vehicleType, serviceType) => {
    if (vehicleType === "Sedan" && serviceType === "Show Room") {
        return "140"
    } else if (vehicleType === "SUV" && serviceType === "Show Room") {
        return "160"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Show Room") {
        return "170"
    } else if (vehicleType === "Motorcycle" && serviceType === "Show Room") {
        return "100"
    } else if (vehicleType === "Sedan" && serviceType === "Basic") {
        return "240"
    } else if (vehicleType === "SUV" && serviceType === "Basic") {
        return "260"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Basic") {
        return "270"
    } else if (vehicleType === "Motorcycle" && serviceType === "Basic") {
        return "200"
    } else if (vehicleType === "Sedan" && serviceType === "Interior") {
        return "340"
    } else if (vehicleType === "SUV" && serviceType === "Interior") {
        return "360"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Interior") {
        return "370"
    } else if (vehicleType === "Motorcycle" && serviceType === "Interior") {
        return "300"
    } else if (vehicleType === "Sedan" && serviceType === "Exterior") {
        return "440"
    } else if (vehicleType === "SUV" && serviceType === "Exterior") {
        return "460"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Exterior") {
        return "470"
    } else if (vehicleType === "Motorcycle" && serviceType === "Exterior") {
        return "400"
    } else {
        return 0
    }
}

export const todaysDate = () => {
    const today = new Date();
    return (`${today.getFullYear()}-${
        (today.getMonth() + 1).toString().padStart(2, '0')}-${
            today.getDate().toString().padStart(2, '0')}`)
}

// Make a function to get the next day
export const calculateDate = (day, by) => {
    return (`2023-01-${+day.slice(Math.max(day.length - 2, 1)) + by}` || todaysDate())
}

export const getDateTimeList = (startDate) => {
    const dateTimeList20 = {
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
    const dateTimeList18 = {
    "2023-01-18": [
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
    "2023-01-19": [
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
    ]
    }
    const dateTimeList19 = {
    "2023-01-19": [
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
    ]
    }
    const dateTimeList21 = {
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
    ],
    "2023-01-23": [
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
    const dateTimeList22 = {
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
    ],
    "2023-01-23": [
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
    "2023-01-24": [
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

    if (startDate === "2023-01-20") {
        return dateTimeList20
    } else if (startDate === "2023-01-18") {
        return dateTimeList18
    } else if (startDate === "2023-01-19") {
        return dateTimeList19
    } else if (startDate === "2023-01-21") {
        return dateTimeList21
    } else if (startDate === "2023-01-22") {
        return dateTimeList22
    }
  }