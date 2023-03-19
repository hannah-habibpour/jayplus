import { getInvoiceDetails } from "../utilities/utils"
import PaymentSuccessHeader from "../components/paymentSuccess/PaymentSuccessHeader"
import Invoice from "../components/shared/payment/Invoice"
import PaymentSuccessFooter from "../components/paymentSuccess/PaymentSuccessFooter"

function PaymentSuccess() {

  const invoiceDetails = getInvoiceDetails()

  return (
    <div id="payment-success-page">

      <PaymentSuccessHeader />
      <Invoice invoiceDetails={invoiceDetails}/>
      <PaymentSuccessFooter />
      
    </div>
  )
}

export default PaymentSuccess