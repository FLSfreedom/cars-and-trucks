import CartWidget from "../CartWidget/CartWidget";
import Dropdown1 from "../Dropdowns/Dropdown1";
import Dropdown2 from "../Dropdowns/Dropdown2";
import '../NavBar/Navbar.css'

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary estiloNav">
          <div className="container-fluid nav-bar container-sm-full">
            <div className="navbar-brand">
              <img src="/LOGOCYT2.jpg" alt="" />
              <h1>C&T Cars and Trucks</h1>
            </div>
            <div className="opcionesNav">
              <div className="navbar-collapse listaFantasma" id="navbarNavDropdown">
                <Dropdown1/>
              </div>
              <div className="estiloCart">
                <CartWidget/>
              </div>
            </div>
          </div>
        </nav>
        <div className="listaFantasma2">
          <Dropdown2/>
        </div>
      </>
    )
};

export default NavBar