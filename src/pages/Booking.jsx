import VehicleType from "../components/booking/VehicleType"
import ServiceType from "../components/booking/ServiceType"
import TimeSelection from "../components/booking/TimeSelection"
import BookingFooter from "../components/booking/BookingFooter"

import { BookingProvider } from "../context/BookingContext"

function Booking() {
  return (
    <BookingProvider>
      <div id="booking-page">
        <VehicleType />
        <ServiceType />
        <TimeSelection />
        <BookingFooter />
      </div>
    </BookingProvider>
  )
}

export default Booking