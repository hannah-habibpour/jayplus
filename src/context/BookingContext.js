import { createContext, useState } from "react"

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
    
    const [ vehicleTypeSelected, setVehicleTypeSelected ] = useState("")
    const [ serviceTypeSelected, setServiceTypeSelected ] = useState("")
    const [ dateTimeSelected, setDateTimeSelected ] = useState("")

    return (
        <BookingContext.Provider value={{
            vehicleTypeSelected,
            serviceTypeSelected,
            dateTimeSelected,
            setVehicleTypeSelected,
            setServiceTypeSelected,
            setDateTimeSelected,
        }}>
            { children }
        </BookingContext.Provider>
    )
}

export default BookingContext


// const calculatePrice = ({}) => {
//     return 150
// }