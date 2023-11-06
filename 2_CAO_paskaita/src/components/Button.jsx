import PropTypes from "prop-types"
// import React from "react"
import "./Button.css"

// const Button = ({text}) => (
//   <div className="btn-wrapper">
//     <button type="button" className="btn">{text}</button>
//   </div>
// )

// const Button = (props) => (
//   <div className="btn-wrapper">
//     <button type="button" className="btn">{props.text}</button>
//   </div>
// )

// const Button = ({type, text, color}) => (
//   <div className="btn-wrapper">
//     <button type={type} className={color}>{text}</button>
//   </div>
// )

const Button = (props) => (
  <div className="btn-wrapper">
    <button type={props.type} className={props.color}>{props.text}</button>
  </div>
)

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string
}

export default Button