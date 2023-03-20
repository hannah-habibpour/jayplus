import { createContext, useState } from "react"

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
    
    const [ vehicleTypeSelected, setVehicleTypeSelected ] = useState("")
    const [ serviceTypeSelected, setServiceTypeSelected ] = useState("")
    const [ dateTimeSelected, setDateTimeSelected ] = useState("")
    const [ serviceCost, setServiceCost ] = useState("0")

    return (
        <BookingContext.Provider value={{
            vehicleTypeSelected,
            serviceTypeSelected,
            dateTimeSelected,
            serviceCost,
            setVehicleTypeSelected,
            setServiceTypeSelected,
            setDateTimeSelected,
            setServiceCost
        }}>
            { children }
        </BookingContext.Provider>
    )
}

export default BookingContext