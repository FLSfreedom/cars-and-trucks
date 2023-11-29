import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import Dropdown1 from "../Dropdowns/Dropdown1";
import Dropdown2 from "../Dropdowns/Dropdown2";
import '../Navbar/Navbar.css'

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navStyle">
          <div className="container-fluid nav-bar container-sm-full">
            <div className="navbar-brand">
              <img src="/LOGOCYT2.jpg" alt="" />
              <Link to='/'><h1>C&T Cars and Trucks</h1></Link>
            </div>
            <div className="navOptions">
              <div className="navbar-collapse hiddenList" id="navbarNavDropdown">
                <Dropdown1/>
              </div>
              <Link to='/cart' className="cartStyle">
                <CartWidget/>
              </Link>
            </div>
          </div>
        </nav>
        <div className="hiddenListTwo">
          <Dropdown2/>
        </div>
      </>
    )
};

export default NavBar