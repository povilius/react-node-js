import PropTypes from "prop-types";
import styled from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton className="button" {...props}>
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;


const StyledButton = styled.button`
  background-color: #ffffff;
  color: rgb(49, 49, 49);
  padding: 0.5rem 1rem;
  border: 1px solid black;

  &:hover {
    background-color: #888888;
    cursor: pointer;
  }
`