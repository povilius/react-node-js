import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

  

  return (
    <header>
      <nav>
        <div className="img-wrapper">
          <img className="img-logo" src="public/povilius-logo.png" alt="logo" />
        </div>

        <div className="nav-wrapper">
          <Link className="nav-item" activeClassName="active-link" to="/">Home</Link>
          <Link className="nav-item" to="/aboutus">About Us</Link>
          <Link className="nav-item" to="/news">News</Link>
          <Link className="nav-item" to="/services">Services</Link>
          <Link className="nav-item" to="/portfolio">Portfolio</Link>
          <Link className="nav-item" to="/contacts">Contacts</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header