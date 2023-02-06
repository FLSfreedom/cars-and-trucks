import { NavLink } from "react-router-dom"

const Dropdown1 = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/category/Automoviles' className="nav-link" href="#">Automóviles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category/Camionetas' className="nav-link" href="#">Camionetas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category/Camiones' className="nav-link" href="#">Camiones</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category/Otros' className="nav-link" href="#">Otros</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown1