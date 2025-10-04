import { NavLink } from "react-router-dom"
import "./Menu.css"


function Menu() {
  return (
    <nav className="menu">
      <div className="marca">
        <NavLink to="/">Blog ODS 7</NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre o ODS</NavLink>
        </li>
        <li>
          <NavLink to="/artigos">Artigos</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
