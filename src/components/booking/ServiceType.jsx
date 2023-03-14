import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"

function ServiceType() {

  const serviceTypes = [{id : 0, name: "Show Room"}, {id : 1, name: "Basic"}, {id : 2, name: "Interior"}, {id : 3, name: "Exterior"}]

  return (
    <section id="service-type">
      <h3>Service Type</h3>
      <TypeList types={serviceTypes} />
      <TypeDescription />
    </section>
  )
}

export default ServiceType