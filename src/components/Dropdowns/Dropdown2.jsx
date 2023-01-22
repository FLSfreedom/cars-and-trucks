const Dropdown2 = () => {
    return (
      <div>
          <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Automóviles
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Grandes</a></li>
                      <li><a className="dropdown-item" href="#">Medianos</a></li>
                      <li><a className="dropdown-item" href="#">Pequeños</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Camionetas
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Grandes</a></li>
                      <li><a className="dropdown-item" href="#">Medianas</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Camiones
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Semiremolques</a></li>
                      <li><a className="dropdown-item" href="#">Volcadores</a></li>
                      <li><a className="dropdown-item" href="#">Medianos</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Otros
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Maquinaria</a></li>
                      <li><a className="dropdown-item" href="#">Motos</a></li>
                    </ul>
                  </li>
          </ul>
      </div>
    )
  }
  
  export default Dropdown2