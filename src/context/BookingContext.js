import { createContext, useState } from "react"

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
    
    const [ vehicleTypeSelected, setVehicleTypeSelected ] = useState("")
    const [ serviceTypeSelected, setServiceTypeSelected ] = useState("")
    const [ dateTimeSelected, setDateTimeSelected ] = useState("")
    const [ totalPrice, setTotalPrice ] = useState("0")

    return (
        <BookingContext.Provider value={{
            vehicleTypeSelected,
            serviceTypeSelected,
            dateTimeSelected,
            totalPrice,
            setVehicleTypeSelected,
            setServiceTypeSelected,
            setDateTimeSelected,
            setTotalPrice
        }}>
            { children }
        </BookingContext.Provider>
    )
}

export default BookingContext


// const calculatePrice = ({}) => {
//     return 150
// }