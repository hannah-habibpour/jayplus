import { createContext, useState } from "react"

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
    
    const [ dateTimeSelected, setDateTimeSelected ] = useState("")
    
    const handleChange = (e) => {
        setDateTimeSelected(e.currentTarget.value)
    }

    return (
        <BookingContext.Provider value={{
            dateTimeSelected,
            handleChange
        }}>
            { children }
        </BookingContext.Provider>
    )
}

export default BookingContext


// const calculatePrice = ({}) => {
//     return 150
// }