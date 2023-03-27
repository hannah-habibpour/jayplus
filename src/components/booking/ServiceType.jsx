import { useContext } from "react"
import { getServiceTypes } from "../../utilities/utils"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"
import BookingContext from "../../context/BookingContext"

function ServiceType() {

  const serviceTypes = getServiceTypes()

  const { serviceTypeSelected, setServiceTypeSelected } = useContext(BookingContext)

  const getDescription = () => {
    const matchingType = serviceTypes.types.find(t => t.name === serviceTypeSelected);
    return matchingType ? matchingType.description() : "No description found.";
  }

  return (
    <section id="service-type">
      <div className="w-full">
      <h3>Service Type</h3>
      <TypeList types={serviceTypes} select={(type) => setServiceTypeSelected(type)} />
      <TypeDescription description={getDescription()}/>

      </div>
    </section>
  )
}

export default ServiceType