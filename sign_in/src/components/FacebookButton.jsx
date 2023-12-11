import styled from "styled-components";
import { RiFacebookCircleLine } from "react-icons/ri";

const FBButton = styled.button`
  background-color: #4267B2;
  color: white;
  border: none;
  border-radius: 5px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 3rem;
  transition: 300ms;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    background-color: #3b5998;
  }
`

const FacebookButton = () => {
  return (
    <FBButton> <RiFacebookCircleLine style={{
      height:'500px',
    }}/> sign up</FBButton>
  )
}

export default FacebookButton