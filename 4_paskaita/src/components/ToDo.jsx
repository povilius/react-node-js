import PropTypes from "prop-types"
import "./Post.css"


const ToDo = (props) => {
  const {item, index} = props

  return (
    <div className="post-card">
      <h3>
        {index + 1}. {item.title}
      </h3>
      {item.completed === true && <p>Task done</p>}
      {item.completed === false && <p>Task to be finished</p>}
    </div>
  )
}

ToDo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  index: PropTypes.number.isRequired,
}

export default ToDo