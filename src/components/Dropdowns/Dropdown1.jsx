import { NavLink } from "react-router-dom"


const Dropdown1 = () => {
  return (
    <div>
        <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Automóviles
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to='/category/Grandes' className="dropdown-item" href="#">Grandes</NavLink></li>
                    <li><NavLink to='/category/Medianos' className="dropdown-item" href="#">Medianos</NavLink></li>
                    <li><NavLink to="/category/Pequenios" className="dropdown-item" href="#">Pequeños</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Camionetas
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to='/category/Grandes' className="dropdown-item" href="#">Grandes</NavLink></li>
                    <li><NavLink to='/category/Medianas' className="dropdown-item" href="#">Medianas</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Camiones
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to='/category/Semiremolques' className="dropdown-item" href="#">Semiremolques</NavLink></li>
                    <li><NavLink to='/category/Volcadores' className="dropdown-item" href="#">Volcadores</NavLink></li>
                    <li><NavLink to='/category/Medianos' className="dropdown-item" href="#">Medianos</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Otros
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to='/category/Maquinaria' className="dropdown-item" href="#">Maquinaria</NavLink></li>
                    <li><NavLink to='/category/Motos' className="dropdown-item" href="#">Motos</NavLink></li>
                  </ul>
                </li>
        </ul>
    </div>
  )
}

export default Dropdown1