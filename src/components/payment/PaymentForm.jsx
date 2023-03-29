import Button from "../shared/all/Button"

function PaymentForm({ price }) {
  return (
    <section id="payment-form">
      <form className="w-full mt-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block tracking-wide" htmlFor="phone">
              Phone Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block tracking-wide" htmlFor="cardNumber">
              Card Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cardNumber" type="text" placeholder="Enter your card number" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block tracking-wide" htmlFor="expiryDate">
              Expiry Date
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="expiryDate" type="text" placeholder="MM/YY" />
          </div>
          <div className="w-1/2">
            <label className="block tracking-wide" htmlFor="cvc">
              CVC
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cvc" type="text" placeholder="Enter your CVC" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block tracking-wide" htmlFor="nameOnCard">
              Name on Card
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nameOnCard" type="text" placeholder="Enter the name on your card" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Button to="/" type="halfWidthActiveButtonDark">Cancel</Button>
          <Button to="/payment-success" type="halfWidthActiveButtonLight">Pay { price }</Button>
        </div>
      </form>

    </section>
  )
}

export default PaymentForm