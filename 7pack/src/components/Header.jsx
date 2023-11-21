import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import Button from "./Button"
import { FaRegSun, FaRegMoon } from "react-icons/fa"
import styled from 'styled-components'

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <StyledHeader>
      <nav>
        <div className="links">
          <Link to="/">Mitybos planai</Link>
          <Link to="/cart">Krepšelis</Link>
          <Link to="/new">Naujas mitybos planas</Link>
        </div>
        <Button onClick={toggleTheme}>
          {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
        </Button>
      </nav>
    </StyledHeader>
  )
}

export default Header



const StyledHeader = styled.header`
  width: 1100px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .links {
    display: flex;
    gap: 10px;
  }

  nav a {
    color: #3a3a3a;
    background-color: #ffff;
    padding: 1rem;
    transition: 300ms;
    border: #252525 solid 1px;

    &:hover {
      color: #252525;
      background-color: #8a8a8a;
    }
  }
`