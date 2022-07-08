import React from "react";
import logo from "../../assets/LogoTienda.png";
import "./styles.css";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";

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

const NavBar = () => {
  return (
    <>
      <header className="container">
        <Link to="/">
        <img className="img" src={logo} alt="logo" />
        </Link>

        <div>
          <nav>
            {categorias.map((categoria) => (
              <NavLink to={categoria.route} className="anchors" key={categoria.id}>
                {categoria.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </header>
    </>
  );
};

export default NavBar;
