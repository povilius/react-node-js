import { useState, useEffect } from "react"
import UserCard from "./UserCard"

const URL = "https://jsonplaceholder.typicode.com/users"

const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      setUsers(response)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div className="user-list">
        {users.map((user) => (
          <UserCard 
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default Users