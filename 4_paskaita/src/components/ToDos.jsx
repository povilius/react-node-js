import { useState, useEffect } from "react"
import ToDo from "./ToDo"


const URL = "https://jsonplaceholder.typicode.com/todos"

const ToDos = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      setData(response)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <div>
      {data.map((item, index) => (
        <ToDo key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}

export default ToDos