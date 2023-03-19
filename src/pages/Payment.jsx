import { getInvoiceDetails } from "../utilities/utils"
import Invoice from "../components/shared/payment/Invoice"
import PaymentForm from "../components/payment/PaymentForm"
function Payment() {

  const invoiceDetails = getInvoiceDetails()

  return (
    <div id="payment-page">
      <Invoice invoiceDetails={invoiceDetails} />
      <PaymentForm />
    </div>
  )
}

export default Payment