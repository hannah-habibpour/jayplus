import { useContext } from "react"
import TypeList from "./shared/TypeList"
import TypeDescription from "./shared/TypeDescription"
import BookingContext from "../../context/BookingContext"

function ServiceType() {

  const serviceTypes = {
    name : "service-types",
    types: [
    {id : "Show-Room", name: "Show Room", description: "\n<div class=\"grid grid-cols-2 gap-3\">\n    <ul class=\"list-disc list-inside\">\n        <li>Complete Interior Fine Detail with Shampoo</li>\n        <li>Full Steam Cleaning on the Dashboard</li>\n        <li>Full Steam Cleaning on seats and Floor</li>\n        <li>Vacuum (Including Trunk Compartment)</li>\n        <li>Detail all Panels, Surfaces & Compartments, etc.</li>\n        <li>Shampoo Clean all Carpeted Areas (Cloth Seats Included)</li>\n        <li>Shampoo Clean Leather Seats</li>\n        <li>Leather Conditioner if you have leather</li>\n        <li>Remove all Salt Stains</li>\n        <li>Interior Polish on Dashboard, Doors, and Leather Seats</li>\n        <li>Remove & Wash all Rubber Mats / Shampoo & Extract all Carpeted Mats</li>\n        <li>Interior Shine on Dashboard, Doors, and Leather Seats</li>\n    </ul>\n    <ul class=\"list-disc list-inside\">\n        <li>Apply Odor Eliminator</li>\n        <li>Final Inspection & Touch Up’s</li>\n        <li>Meticulous Foam & Hand Wash</li>\n        <li>Full Body Wax</li>\n        <li>Remove Brake Dust from Wheels, Clean & Dress Tires</li>\n        <li>Full Wax on Tires</li>\n        <li>Power Wash & Clean Wheel Wells</li>\n        <li>Shampoo Clean and Dress Engine</li>\n        <li>Air Dry Entire Vehicle</li>\n        <li>Clean Exterior and Interior Glass</li>\n        <li>Wipe Down Door Jams</li>\n    </ul>\n</div>"},
    {id : "Basic", name: "Basic", description: "\n<div class=\"grid grid-cols-2 gap-3\">\n    <ul class=\"list-disc list-inside\">\n        <li>Vacuum (Including Trunk Compartment)</li>\n        <li>Remove & Wash all Rubber Mats</li>\n        <li>Wipe All Over The dashboard</li>\n    </ul>\n    <ul class=\"list-disc list-inside\">\n        <li>Power Wash Body and Windows</li>\n        <li>Power Wash & Clean Wheel Wells</li>\n    </ul>\n</div>"},
    {id : "Interior", name: "Interior", description: "\n<div class=\"grid grid-cols-2 gap-3\">\n    <ul class=\"list-disc list-inside\">\n        <li>Complete Interior Fine Detail with Shampoo</li>\n        <li>Full Steam Cleaning on the Dashboard</li>\n        <li>Full Steam Cleaning on seats and Floor</li>\n        <li>Vacuum (Including Trunk Compartment)</li>\n        <li>Detail all Panels, Surfaces & Compartments, etc.</li>\n        <li>Shampoo Clean all Carpeted Areas (Cloth Seats Included)</li>\n        <li>Shampoo Clean Leather Seats</li>\n    </ul>\n    <ul class=\"list-disc list-inside\">\n        <li>Leather Conditioner</li>\n        <li>Remove all Salt Stains</li>\n        <li>Interior Polish on Dashboard, Doors, and Leather Seats</li>\n        <li>Remove & Wash all Rubber Mats / Shampoo & Extract all Carpeted Mats</li>\n        <li>Interior Shine on Dashboard, Doors, and Leather Seats</li>\n        <li>Apply Odor Eliminator</li>\n        <li>Final Inspection & Touch Up</li>\n    </ul>\n</div>"},
    {id : "Exterior", name: "Exterior", description: "\n<div class=\"grid grid-cols-2 gap-3\">\n    <ul class=\"list-disc list-inside\">\n        <li>Meticulous Foam & Hand Wash</li>\n        <li>Remove Brake Dust from Wheels, Clean & Dress Tires</li>\n        <li>Power Wash & Clean Wheel Wells</li>\n    </ul>\n    <ul class=\"list-disc list-inside\">\n        <li>Shampoo Clean and Dress Engine</li>\n        <li>Air Dry Entire Vehicle</li>\n        <li>Clean Windows</li>\n        <li>Wipe Down Door Jams</li>\n    </ul>\n</div>"}]
  }

  const { serviceTypeSelected, setServiceTypeSelected } = useContext(BookingContext)

  const getDescription = () => {
    const matchingType = serviceTypes.types.find(t => t.name === serviceTypeSelected);
    return matchingType ? matchingType.description : "No description found.";
  }

  return (
    <section id="service-type">
      <h3>Service Type</h3>
      <TypeList types={serviceTypes} select={(type) => setServiceTypeSelected(type)} />
      <TypeDescription description={getDescription()}/>
    </section>
  )
}

export default ServiceType