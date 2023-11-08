import { useState, useEffect } from 'react'
import ProductCard from "./components/ProductCard"
import Users from "./components/Users"
import Photos from './components/Photos'


import './App.css'

const URL = "https://sophisticated-humane-dandelion.glitch.me"

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      setProducts(response)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts(updatedProducts)
  }

  return (
    <div>
      {isLoading && <div>Loading...</div> }
      <div className='product-list'>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <br />
        <Users />
      <br />
        <Photos />
    </div>
  )
}

export default App
