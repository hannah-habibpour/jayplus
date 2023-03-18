import { useState } from "react"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"

function VehicleType() {
  
  const vehicleTypes = {
    name : "vehicle-types",
    types: [
    {id : "Sedan", name: "Sedan", description: "Any 5-seater sedan, any hatchback, any two or mini car"},
    {id : "SUV", name: "SUV", description: "Any 5 seater SUV"}, 
    {id : "Large-SUV-Truck", name: "Large SUV / Truck", description: "Any 6, 7, or 8 seater, minivan or van, pickup truck"},
    {id : "Motorcycle", name: "Motorcycle", description: "Any motorcycle"}]
  }

  const [ vehicleType, setvehicleType ] = useState("")

  const getDescription = () => {
    const matchingType = vehicleTypes.types.find(t => t.name === vehicleType);
    return matchingType ? matchingType.description : "No description found.";
  }

  return (
    <section id="vehicle-type">
      <h3>Vehicle Type</h3>
      <TypeList 
        types={vehicleTypes}
        select={(type) => {
          setvehicleType(type)
        }} />
      <TypeDescription description={getDescription()}/>
    </section>
  )
}

export default VehicleType