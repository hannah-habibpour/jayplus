import Button from "../../shared/all/Button"

function NumberOfTimeButtons({time}) {
  return (
    <div className="grid grid-flow-row gap-2">
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
        <Button children={time} />
    </div>
    
  )
}

export default NumberOfTimeButtons