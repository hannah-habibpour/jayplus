import VehicleType from "../components/booking/VehicleType"
import ServiceType from "../components/booking/ServiceType"
import TimeSelection from "../components/booking/TimeSelection"
import BookingFooter from "../components/booking/BookingFooter"

function Booking() {
  return (
    <div id="booking-page">
      <VehicleType />
      <ServiceType />
      <TimeSelection />
      <BookingFooter price={160}/>
    </div>
  )
}

export default Booking