import { useState } from "react"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"

function ServiceType() {

  
  const serviceTypes = {
    name : "service-types",
    types: [
    {id : "Show-Room", name: "Show Room"},
    {id : "Basic", name: "Basic"},
    {id : "Interior", name: "Interior"},
    {id : "Exterior", name: "Exterior"}]
  }

  const [ serviceType, setserviceType ] = useState("")

  return (
    <section id="service-type">
      <h3>Service Type</h3>
      <TypeList types={serviceTypes} select={(type) => setserviceType(type)} />
      <TypeDescription />
    </section>
  )
}

export default ServiceType