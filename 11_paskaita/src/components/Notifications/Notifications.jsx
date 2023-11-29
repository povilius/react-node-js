import PropTypes from 'prop-types'

const Notifications = ({ primary, secondary, children }) => {
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

export default Notifications

Notifications.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  children: PropTypes.node,
}