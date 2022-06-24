import React from "react";
import logo from "../../assets/LogoTienda.png";
import "./styles.css";
import CartWidget from "../CartWidget";

const menuItems = [
  {
    id: 1,
    name: "Celulares y tablets",
  },
  {
    id: 2,
    name: "Computación",
  },
  {
    id: 3,
    name: "Promociones",
  },
];

const NavBar = () => {
  return (
    <>
      <header class="container">
        <img class="img" src={logo} alt="logo" />

        <nav>
          <div>
            {menuItems.map((item) => (
              <a href="/" class="anchors" key={item.id}>
                {" "}
                {item.name}{" "}
              </a>
            ))}
          </div>
        </nav>
        <CartWidget />
      </header>

    </>
  );
};

export default NavBar;
