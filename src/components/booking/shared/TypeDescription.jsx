function TypeDescription({ description }) {

  const descriptionStyle = {
    background: process.env.REACT_APP_DESCRIPTION_CARD_BACKGROUND_COLOR,
    borderStyle: "solid",
    borderColor: process.env.REACT_APP_DESCRIPTION_CARD_BORDER_COLOR,
    borderWidth: "2px",
    borderRadius: "5px",
    padding: "15px",
  }
  return (
    <div style={descriptionStyle}>{description}</div>
  )
}

export default TypeDescription