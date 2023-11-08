import { useState, useEffect } from "react"
import Post from "./Post"


const URL = "https://jsonplaceholder.typicode.com/posts"

const Posts = () => {
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
        <Post key={item.id} post={item} index={index} />
      ))}
    </div>
  )
}

export default Posts