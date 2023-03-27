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

// Change this!!!
export const todaysDate = () => {
    return "2023-01-20"
    // const today = new Date();
    // return (`${today.getFullYear()}-${
    //     (today.getMonth() + 1).toString().padStart(2, '0')}-${
    //         today.getDate().toString().padStart(2, '0')}`)
}

export const addDaysToDate = (inputDate, by) => {
    // Parse the input date string into year, month, and day components
    var parts = inputDate.split("-")
    var year = parseInt(parts[0], 10)
    var month = parseInt(parts[1], 10) - 1 // month is 0-indexed
    var day = parseInt(parts[2], 10)
  
    // Creates a new Date object using the year, month, and day components
    var date = new Date(year, month, day)
  
    // Adds the number of days to the date
    date.setDate(date.getDate() + by)
  
    // Converts the date back to the "yyyy-mm-dd" format
    year = date.getFullYear()
    month = ("0" + (date.getMonth() + 1)).slice(-2)
    day = ("0" + date.getDate()).slice(-2)
  
    return year + "-" + month + "-" + day
}

export const dateToNumber = (inputDate) => {
    const [year, month, day] = inputDate.split("-").map(Number)
    const date = new Date(year, month - 1, day)
    return +(date.toISOString().slice(0, 10).replace(/-/g, ""))
}

export const getVehicleTypes = () => {
    return (
        {
            name : "vehicle-types",
            types: [
            {id : "Sedan", name: "Sedan", icon: "sedan.svg", description: "Any 5-seater sedan, any hatchback, any two or mini car"},
            {id : "SUV", name: "SUV", icon: "suv.svg", description: "Any 5 seater SUV"}, 
            {id : "Large-SUV-Truck", name: "Large SUV / Truck", icon: "largeSuvTruck.svg", description: "Any 6, 7, or 8 seater, minivan or van, pickup truck"},
            {id : "Motorcycle", name: "Motorcycle", icon: "motorcycle.svg", description: "Any motorcycle"}]
        }
    )
}

export const getServiceTypes = () => {
    return (
        {
            name : "service-types",
            types: [
                {
                    id: "Show-Room",
                    name: "Show Room",
                    description: () => (
                      <div>
                        <div className="grid grid-cols-2 gap-3">
                          <ul className="list-disc list-inside">
                            <li>Complete Interior Fine Detail with Shampoo</li>
                            <li>Full Steam Cleaning on the Dashboard</li>
                            <li>Full Steam Cleaning on seats and Floor</li>
                            <li>Vacuum (Including Trunk Compartment)</li>
                            <li>Detail all Panels, Surfaces &amp; Compartments, etc.</li>
                            <li>Shampoo Clean all Carpeted Areas (Cloth Seats Included)</li>
                            <li>Shampoo Clean Leather Seats</li>
                            <li>Leather Conditioner if you have leather</li>
                            <li>Remove all Salt Stains</li>
                            <li>Interior Polish on Dashboard, Doors, and Leather Seats</li>
                            <li>Remove &amp; Wash all Rubber Mats / Shampoo &amp; Extract all Carpeted Mats</li>
                            <li>Interior Shine on Dashboard, Doors, and Leather Seats</li>
                          </ul>
                          <ul className="list-disc list-inside">
                            <li>Apply Odor Eliminator</li>
                            <li>Final Inspection &amp; Touch Up’s</li>
                            <li>Meticulous Foam &amp; Hand Wash</li>
                            <li>Full Body Wax</li>
                            <li>Remove Brake Dust from Wheels, Clean &amp; Dress Tires</li>
                            <li>Full Wax on Tires</li>
                            <li>Power Wash &amp; Clean Wheel Wells</li>
                            <li>Shampoo Clean and Dress Engine</li>
                            <li>Air Dry Entire Vehicle</li>
                            <li>Clean Exterior and Interior Glass</li>
                            <li>Wipe Down Door Jams</li>
                          </ul>
                        </div>
                      </div>
                    )
                },
                {
                    id : "Basic", 
                    name: "Basic", 
                    description: () => (
                        <div>
                            <div class="grid grid-cols-2 gap-3">
                                <ul class="list-disc list-inside">
                                    <li>Vacuum (Including Trunk Compartment)</li>
                                    <li>Remove &amp; Wash all Rubber Mats</li>
                                    <li>Wipe All Over The dashboard</li>
                                </ul>
                                <ul class="list-disc list-inside">
                                    <li>Power Wash Body and Windows</li>
                                    <li>Power Wash &amp; Clean Wheel Wells</li>
                                </ul>
                            </div>
                        </div>
                    )
                },
                {
                    id : "Interior", 
                    name: "Interior", 
                    description: () => (
                        <div>
                            <div class="grid grid-cols-2 gap-3">
                                <ul class="list-disc list-inside">
                                    <li>Complete Interior Fine Detail with Shampoo</li>
                                    <li>Full Steam Cleaning on the Dashboard</li>
                                    <li>Full Steam Cleaning on seats and Floor</li>
                                    <li>Vacuum (Including Trunk Compartment)</li>
                                    <li>Detail all Panels, Surfaces &amp; Compartments, etc.</li>
                                    <li>Shampoo Clean all Carpeted Areas (Cloth Seats Included)</li>
                                    <li>Shampoo Clean Leather Seats</li>
                                </ul>
                                <ul class="list-disc list-inside">
                                    <li>Leather Conditioner</li>
                                    <li>Remove all Salt Stains</li>
                                    <li>Interior Polish on Dashboard, Doors, and Leather Seats</li>
                                    <li>Remove &amp; Wash all Rubber Mats / Shampoo &amp; Extract all Carpeted Mats</li>
                                    <li>Interior Shine on Dashboard, Doors, and Leather Seats</li>
                                    <li>Apply Odor Eliminator</li>
                                    <li>Final Inspection &amp; Touch Up</li>
                                </ul>
                            </div>
                        </div>
                    )
                },
                {
                    id : "Exterior", 
                    name: "Exterior", 
                    description: () => (
                        <div>
                            <div class="grid grid-cols-2 gap-3">
                                <ul class="list-disc list-inside">
                                    <li>Meticulous Foam &amp; Hand Wash</li>
                                    <li>Remove Brake Dust from Wheels, Clean &amp; Dress Tires</li>
                                    <li>Power Wash &amp; Clean Wheel Wells</li>
                                </ul>
                                <ul class="list-disc list-inside">
                                    <li>Shampoo Clean and Dress Engine</li>
                                    <li>Air Dry Entire Vehicle</li>
                                    <li>Clean Windows</li>
                                    <li>Wipe Down Door Jams</li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            ]
        }
    )
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

export const getInvoiceDetails = (vehicleTypeSelected, serviceTypeSelected, dateTimeSelected) => {
    return (
        {
            "Transaction Number": "13",
            "Bill Number": "37",
            "Type of Service": "Show Room",
            "Vehicle Type": "Sedan",
            "Date": "14 Mar 2023",
            "Time": "15:00",
            "Service Cost": "169.00 $",
            "Discount": "Not Specified",
            "Total": "169.00 $",
            "Deposit": "30.00 $",
            "Remaining": "139.00 $"
        }
    )
}