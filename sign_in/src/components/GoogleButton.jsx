import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const GButton = styled.button`
  background-color: white;
  display: flex;
  width: 50%;
  border: #adadad solid 1px;
  border-radius: 5px;
  height: 3rem;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 300ms;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }
`

const GoogleButton = () => {
  return (
    <GButton> <FcGoogle /> sign up</GButton>
  )
}

export default GoogleButton