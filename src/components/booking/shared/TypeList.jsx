import Button from "../../shared/all/Button"

function TypeList({ types }) {
  return (
    <div id="type-list" className="flex gap-4">
        {types.map( type => (
          <Button key={type.id}>{type.name}</Button>
        ))}
    </div>
  )
}

export default TypeList