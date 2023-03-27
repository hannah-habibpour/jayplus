

function Invoice({ invoiceDetails }) {
  
  const cardStyle = {
    background: "#E9ECEF",
    padding: "15px 20px",
    borderRadius: "5px"
  }

  return (
    <section id="invoice">
      <div className="invoice-card" style={cardStyle}>
        <table className="w-full">
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

