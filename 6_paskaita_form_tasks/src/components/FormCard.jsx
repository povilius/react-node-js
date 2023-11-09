import { useState } from "react"


const FormCard = () => {
  const [name, setName] = useState(``)
  const [surname, setSurname] = useState(``)
  const [email, setEmail] = useState(``)
  const [age, setAge] = useState(``)
  const [password, setPassword] = useState(``)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState({})

  const errorChecker = () => {
    let errorObject = {}
    if (!email) errorObject.email = "*Required"
    if (!password) errorObject.password = "*Required"
    return errorObject
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errorObject = errorChecker()

    setError(errorObject)

    const hasErrors = Object.keys(errorObject).length !== 0
    setIsLoggedIn(!hasErrors)
  }

  const handleLogOut = () => {
    setEmail("")
    setPassword("")
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return (
      <div>
        <h3>Hello {name} {surname}, nice to meet you!</h3>
        <button className="log-out-btn" onClick={handleLogOut}>Log Out</button>
      </div>
    )
  }

  return (
    <div className="form-card">
      <h2 className="form-title">Register</h2>

    <form className="form-wrapper" name="login-form" onSubmit={handleSubmit}>
      <div className="input-item">
        <label htmlFor="name">Name</label>

        <p className="error">{error.email}</p>

        <input 
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name" 
        />
      </div>

      <div className="input-item">
        <label htmlFor="surname">Surname</label>
      <input 
        id="surname"
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Enter Surname" 
        />
      </div>

      <div className="input-item">
      <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
      </div>

      <div className="input-item">
        <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter Age"
      />
      </div>

      <div className="input-item">
      <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
      </div>

      <button className="submit-btn" type="submit">Register</button>
    </form>
    </div>
  )
}

export default FormCard