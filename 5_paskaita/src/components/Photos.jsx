import { useState, useEffect } from "react"
import PhotoCard from "./PhotoCard"

const URL = "https://jsonplaceholder.typicode.com/photos"

const Photos = () => {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      setPhotos(response)
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
        {photos.map((photo) => (
          <PhotoCard 
            key={photo.id}
            photo={photo}
          />
        ))}
      </div>
    </div>
  )
}

export default Photos