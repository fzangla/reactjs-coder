import React from "react";
import logo from "../../Assets/LogoTienda.png";
import "./styles.css";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="img" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ver más
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/categoria/celulares">
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/computadoras">
                    Computadoras
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/producto">
                    Ver productos
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      <Link className="align-items-center" to="/cart">
        <CartWidget />
      </Link>
      </div>
    </nav>
  );
};

export default NavBar;


/*
const categorias = [
  {
    id: 1,
    name: "Promociones",
    route: "/categoria/Promociones",
  },
  {
    id: 2,
    name: "Computadoras",
    route: "/categoria/Computadoras",
  },
  {
    id: 3,
    name: "Celulares",
    route: "/categoria/Celulares",
  },
];
<nav>
  {categorias.map((categoria) => (
    <NavLink to={categoria.route} className="anchors" key={categoria.id}>
      {categoria.name}
    </NavLink>
  ))}
</nav>
*/