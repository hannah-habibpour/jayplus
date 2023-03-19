import { useContext } from "react"
import BookingContext from "../../context/BookingContext"

import Button from "../shared/all/Button"

function BookingFooter() {
  const { totalPrice, vehicleTypeSelected, serviceTypeSelected, dateTimeSelected } = useContext(BookingContext)

  const isDisabled = (dateTimeSelected === "" || vehicleTypeSelected === "" || serviceTypeSelected === "")
  
  return (
    <section id="booking-footer">
      <div>price: ${totalPrice}</div>
        <Button to="/payment" disabled={isDisabled}>Payment</Button>
    </section>
  )
}

export default BookingFooter