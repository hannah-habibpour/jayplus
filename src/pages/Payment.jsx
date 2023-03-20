import { useContext } from "react"
import { getInvoiceDetails } from "../utilities/utils"
import Invoice from "../components/shared/payment/Invoice"
import PaymentForm from "../components/payment/PaymentForm"

import BookingContext from "../context/BookingContext"

function Payment() {

  const { vehicleTypeSelected, serviceTypeSelected, dateTimeSelected } = useContext(BookingContext)

  const invoiceDetails = getInvoiceDetails(vehicleTypeSelected, serviceTypeSelected, dateTimeSelected)

  return (
    <div id="payment-page">
      <Invoice invoiceDetails={invoiceDetails} />
      <PaymentForm />
    </div>
  )
}

export default Payment