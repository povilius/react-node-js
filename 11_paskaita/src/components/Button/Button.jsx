import PropTypes from 'prop-types'

const Button = ({ primary, secondary, children }) => {
  const buttonBgColor = () => {
    if (primary) {
      return "blue";
    }
    if (secondary) {
      return "red";
    }
  }

  return (
    <button
      style={{
        backgroundColor: buttonBgColor(),
        color: "white",
      }}
    >
      {children}
    </button>
  );
};

export default Button

Button.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  children: PropTypes.node,
}