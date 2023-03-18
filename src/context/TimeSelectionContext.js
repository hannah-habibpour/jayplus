import { createContext, useState } from "react"

const TimeSelectionContext = createContext()

export const TimeSelectionProvidor = ({ children }) => {
    const [ dateTimeSelected, setDateTimeSelected ] = useState("2023-01-2009:00")

    const handleChange = (e) => {
        setDateTimeSelected(e.currentTarget.value)
    }

    return (
        <TimeSelectionContext.Provider value={{
            dateTimeSelected,
            handleChange
        }}>
            { children }
        </TimeSelectionContext.Provider>
    )
}

export default TimeSelectionContext