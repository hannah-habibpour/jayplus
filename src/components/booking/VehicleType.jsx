import { useContext } from "react"
import { getVehicleTypes } from "../../utilities/utils"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"
import BookingContext from "../../context/BookingContext"

function VehicleType() {
  
  const vehicleTypes = getVehicleTypes()

  const { vehicleTypeSelected, setVehicleTypeSelected } = useContext(BookingContext)

  const getDescription = () => {
    const matchingType = vehicleTypes.types.find(t => t.name === vehicleTypeSelected);
    return matchingType ? matchingType.description : "No description found.";
  }

  return (
    <section id="vehicle-type">
      <h3>Vehicle Type</h3>
      <TypeList 
        types={vehicleTypes}
        select={(type) => {
          setVehicleTypeSelected(type)
        }} />
      <TypeDescription description={getDescription()}/>
    </section>
  )
}

export default VehicleType