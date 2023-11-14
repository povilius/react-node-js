import { useState } from "react"
import "./Contacts.css"

const Contacts = () => {
  const [name, setName] = useState(``)
  const [surname, setSurname] = useState(``)
  const [email, setEmail] = useState(``)
  const [message, setMessage] = useState(``)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState({})

  const errorChecker = () => {
    let errorObject = {}
    if (!email) errorObject.email = "*Required"
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
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return (
      <div>
        <h3>Thank you for your message, {name} {surname}. We will be in touch soon!</h3>
        <button className="log-out-btn" onClick={handleLogOut}>Back</button>
      </div>
    )
  }

  return (
    <div className="form-card">
      <h2 className="form-title">Leave us a message!</h2>

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
      <label htmlFor="message">Your message</label>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message..."
        />
      </div>

      <button className="submit-btn" type="submit">Send</button>
    </form>
    </div>
  )
}

export default Contacts