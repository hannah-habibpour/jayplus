import { Link } from "react-router-dom"

function Button({ to, children, disabled }) {
  return (
    <Link to={to} >
      <button className={`bg-gray-500 hover:bg-gray-700 text-white px-2 rounded ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}

export default Button