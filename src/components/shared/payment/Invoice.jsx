

function Invoice({ invoiceDetails }) {
  
  return (
    <section id="invoice">
      <div className="invoice-card">
        <table className="">
          <tbody>
            {Object.entries(invoiceDetails).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    
  )
}

export default Invoice

