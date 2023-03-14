import Button from "../shared/all/Button"

function BookingFooter({ price }) {
  return (
    <section id="booking-footer">
      <div>price: ${price}</div>
      <Button>Payment</Button>
      
    </section>
  )
}

export default BookingFooter