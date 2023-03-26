import { useContext } from "react"
import { getInvoiceDetails } from "../utilities/utils"

import BookingContext from "../context/BookingContext"

import PaymentSuccessHeader from "../components/paymentSuccess/PaymentSuccessHeader"
import Invoice from "../components/shared/payment/Invoice"
import PaymentSuccessFooter from "../components/paymentSuccess/PaymentSuccessFooter"

function PaymentSuccess() {

  const { vehicleTypeSelected, serviceTypeSelected, dateTimeSelected } = useContext(BookingContext)

  const invoiceDetails = getInvoiceDetails(vehicleTypeSelected, serviceTypeSelected, dateTimeSelected)

  return (
    <div id="payment-success-page" className=" flex flex-col items-center">

      <PaymentSuccessHeader />
      <Invoice invoiceDetails={invoiceDetails}/>
      <PaymentSuccessFooter />
      
    </div>
  )
}

export default PaymentSuccess