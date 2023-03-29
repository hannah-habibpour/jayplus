import { useContext } from "react"
import BookingContext from "../../context/BookingContext"

import Button from "../shared/all/Button"

function BookingFooter() {
  const { serviceCost, vehicleTypeSelected, serviceTypeSelected, dateTimeSelected } = useContext(BookingContext)

  const isDisabled = (dateTimeSelected === "" || vehicleTypeSelected === "" || serviceTypeSelected === "")
  
  const buttonStyle = {
    width: "280px",
    height: "43px",
  }
  return (
    <section id="booking-footer">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 mt-2 text-lg">Price: <span className="font-bold">${serviceCost}</span></div>
        <Button to="/payment" disabled={isDisabled} type="largeFixedWidthActiveButtonLight">Payment</Button>
      </div>
    </section>
  )
}

export default BookingFooter