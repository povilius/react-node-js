import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/user";



const AddUserForm = () => {
  
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})

  const errorChecker = () => {
    let errorObject = {}
    if (!name) errorObject.name = "*Required"
    if (!username) errorObject.username= "*Required"
    if (!email) errorObject.email = "*Required"
    return errorObject
  }

  const resetForm = () => {
    setName('')
    setUsername('')
    setEmail('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const errorObject = errorChecker()
    setErrors(errorObject)

    const newUser = { name, username, email }
    

    createUser(newUser)
      .then((response) => {
        console.log(response)
        setIsSubmitted(true)
        resetForm()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <button onClick={goBack}>Go back</button>
    <div className="form-card">

    <form className="form-wrapper" onSubmit={handleSubmit}>
    {isSubmitted && (
        <h3 className="success-message">
          Added successfully
        </h3>
      )}
      <div className="input-item">
        <label htmlFor="name">Name:</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <span>*Required</span>}
      </div>

      <div className="input-item">
        <label htmlFor="dob">Username:</label>
        <input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {errors.username && <span>*Required</span>}
      </div>

      <div className="input-item">
        <label htmlFor="email">Email:</label>
        <input
           placeholder="Email"
           type="email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span>*Required</span>}
      </div>

      <button type="submit">Add User</button>
    </form>
    </div>
    </div>
  )
}

export default AddUserForm