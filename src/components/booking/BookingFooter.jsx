import { useContext } from "react"
import BookingContext from "../../context/BookingContext"

import Button from "../shared/all/Button"

function BookingFooter() {
  const { totalPrice } = useContext(BookingContext)

  return (
    <section id="booking-footer">
      <div>price: ${totalPrice}</div>
      <Button>Payment</Button>
    </section>
  )
}

export default BookingFooter