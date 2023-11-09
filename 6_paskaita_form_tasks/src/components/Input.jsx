import { useState } from "react"

const Input = () => {
  const [name, setName] = useState(``)
  const [surname, setSurname] = useState(``)
  const [animal, setAnimal] = useState(``)


  return (
    <div>
      <h3>
        {name} {surname} favorite animal is {animal}
      </h3>
    

      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name..."  
      />

      <input 
        type="text" 
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Enter surname..."  
      />

      <select
      value={animal}
      onChange={(e) => setAnimal(e.target.value)}
      >
        <option value="">Choose</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Fish">Fish</option>
        <option value="Cow">Cow</option>
      </select>
    </div>
  )
}

export default Input