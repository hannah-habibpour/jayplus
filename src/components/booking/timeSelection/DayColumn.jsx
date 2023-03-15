
function DayColumn() {

    const divs = Array.from({ length: 10 }, (_, index) => (
          <div key={index}>{index + 1}</div>
        ))

  return (
    <>
        <div className="grid grid-rows-10 grid-col-1 gap-2">
            {divs}
        </div>
    </>
  )
}

export default DayColumn