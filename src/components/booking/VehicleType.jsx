import { useContext } from "react"
import { getVehicleTypes } from "../../utilities/utils"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"
import BookingContext from "../../context/BookingContext"

function VehicleType() {
  // Function that retreives the vehicle types from the API
  const vehicleTypes = getVehicleTypes()

  // Context we are using to store the state of the selected vehicle type
  const { vehicleTypeSelected, setVehicleTypeSelected } = useContext(BookingContext)

  // Function returns a description of the vehicle type selected or "No description found."
  const getDescription = () => {
    const matchingType = vehicleTypes.types.find(t => t.name === vehicleTypeSelected);
    return matchingType ? matchingType.description : "No description found.";
  }

  return (
    <section id="vehicle-type">
      <div className="w-full">
        <h3>Vehicle Type</h3>
        <TypeList
          types={vehicleTypes}
          select={(type) => {
          setVehicleTypeSelected(type)
        }} />
        <TypeDescription description={getDescription()} />
      </div>
    </section>
  )
}

export default VehicleType