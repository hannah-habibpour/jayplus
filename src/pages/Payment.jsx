import Invoice from "../components/shared/payment/Invoice"
import PaymentForm from "../components/payment/PaymentForm"

function Payment() {
  return (
    <div id="payment-page">
      <Invoice />
      <PaymentForm />
    </div>
  )
}

export default Payment