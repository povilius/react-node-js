import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="nav-wrapper">
          <Link className="nav-item" activeClassName="active-link" to="/">Home</Link>
          <Link className="nav-item" to="/aboutus">About Us</Link>
          <Link className="nav-item" to="/news">News</Link>
          <Link className="nav-item" to="/services">Services</Link>
          <Link className="nav-item" to="/portfolio">Portfolio</Link>
          <Link className="nav-item" to="/contacts">Contacts</Link>
        </div>

        <p className="copyright">Copyright © 2023 Your Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer