import Button from "../shared/all/Button"

function PaymentSuccessFooter() {
  return (
    <section id="payment-success-footer">
      <div className="mt-4">
        <Button to="/" type="mediumFixedWidthActiveButtonLight">Back to Home</Button>
      </div>
    </section>
   
  )
}

export default PaymentSuccessFooter