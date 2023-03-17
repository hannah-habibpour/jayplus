import { useState } from "react"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"

function VehicleType() {
  
  const vehicleTypes = {
    name : "vehicle-types",
    types: [
    {id : "Sedan", name: "Sedan"},
    {id : "SUV", name: "SUV"}, 
    {id : "Large-SUV-Truck", name: "Large SUV / Truck"},
    {id : "Motorcycle", name: "Motorcycle"}]
  }

  const [ vehicleType, setvehicleType ] = useState("")

  return (
    <section id="vehicle-type">
      <h3>Vehicle Type</h3>
      <TypeList types={vehicleTypes} select={(type) => setvehicleType(type)} />
      <TypeDescription />
    </section>
  )
}

export default VehicleType