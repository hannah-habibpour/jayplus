import { Link } from "react-router-dom";

function Button({ to, children, type="", disabled }) {

  let buttonStyle = {};

  if (type === "largeFixedWidthActiveButtonLight") {
    buttonStyle = {
      background: process.env.REACT_APP_ACTIVE_ACTION_BUTTON_COLOR_LIGHT,
      width: "280px",
      height: "45px"
    }
  } else if (type === "mediumFixedWidthActiveButtonLight") {
    buttonStyle = {
      background: process.env.REACT_APP_ACTIVE_ACTION_BUTTON_COLOR_LIGHT,
      width: "160px",
      height: "45px"
    }
  } else if (type === "halfWidthActiveButtonLight") {
    buttonStyle = {
      background: process.env.REACT_APP_ACTIVE_ACTION_BUTTON_COLOR_LIGHT,
      width: "100%",
      height: "45px"
    }
  } else if (type === "halfWidthActiveButtonDark") {
    buttonStyle = {
      background: process.env.REACT_APP_ACTIVE_ACTION_BUTTON_COLOR_DARK,
      width: "100%",
      height: "45px"
    }
  } else {
    buttonStyle = {
      width: "100%",
      height: "45px"
    }
  }

  return (
    <Link to={to} className={`rounded ${disabled ? "opacity-50 cursor-not-allowed" : ""} flex justify-center items-center`} style={buttonStyle} onClick={disabled ? e => e.preventDefault() : null}>
        {children}
    </Link>
  );
}

export default Button;
