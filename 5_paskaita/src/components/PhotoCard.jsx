import PropTypes from "prop-types"
import "./UserCard.css"

const PhotoCard = (props) => {
  const {photo} = props
  const {title, thumbnailUrl} = photo

  return (
    <div className="user-card">
      <p>{title}</p>
      <img src={thumbnailUrl} alt={title} />
    </div>
  )
}

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  })
}

export default PhotoCard