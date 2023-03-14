import PaymentSuccessHeader from "../components/paymentSuccess/PaymentSuccessHeader"
import Invoice from "../components/shared/payment/Invoice"
import PaymentSuccessFooter from "../components/paymentSuccess/PaymentSuccessFooter"

function PaymentSuccess() {
  return (
    <div id="payment-success-page">

      <PaymentSuccessHeader />
      <Invoice />
      <PaymentSuccessFooter />
      
    </div>
  )
}

export default PaymentSuccess