import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"

function VehicleType() {
  
  const vehicleTypes = [{id : 0, name: "Sedan"}, {id : 1, name: "SUV"}, {id : 2, name: "Large SUV / Truck"}, {id : 3, name: "Motorcycle"}]

  return (
    <section id="vehicle-type">
      <h3>Vehicle Type</h3>
      <TypeList types={vehicleTypes} />
      <TypeDescription />
    </section>
  )
}

export default VehicleType