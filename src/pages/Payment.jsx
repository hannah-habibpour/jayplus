import Invoice from "../components/shared/payment/Invoice"
import PaymentForm from "../components/payment/PaymentForm"

function Payment() {

  const invoiceDetails = {
    "Transaction Number": "13",
    "Bill Number": "37",
    "Type of Service": "Show Room",
    "Vehicle Type": "Sedan",
    "Date": "14 Mar 2023",
    "Time": "15:00",
    "Service Cost": "169.00 $",
    "Discount": "Not Specified",
    "Total": "169.00 $",
    "Deposit": "30.00 $",
    "Remaining": "139.00 $"
  }

  return (
    <div id="payment-page">
      <Invoice invoiceDetails={invoiceDetails} />
      <PaymentForm />
    </div>
  )
}

export default Payment