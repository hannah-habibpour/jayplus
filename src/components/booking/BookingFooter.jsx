import { useContext } from "react"
import BookingContext from "../../context/BookingContext"

import Button from "../shared/all/Button"

function BookingFooter() {
  const { serviceCost, vehicleTypeSelected, serviceTypeSelected, dateTimeSelected } = useContext(BookingContext)

  const isDisabled = (dateTimeSelected === "" || vehicleTypeSelected === "" || serviceTypeSelected === "")
  
  return (
    <section id="booking-footer">
      <div className="flex flex-col items-center justify-center">
      <div className="">price: ${serviceCost}</div>
        <Button to="/payment" disabled={isDisabled}>Payment</Button>
      </div>
    </section> 
    // flex justify-center items-center
  )
}

export default BookingFooter