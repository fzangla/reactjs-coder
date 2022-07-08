import React from "react";
import "./styles.css";
import ItemCount from "../ItemCount";
// import a21s from "../../assets/a21s.png"
import "../ItemCount/styles.css";

const Item = ({ data }) => {
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} ${data} al carrito`);
  };

  
  return (
    <div className="div-container">
      <div className="card">
        <h2>{data}</h2>
        {/* <img className="productImg" src={a21s} alt="Celular a21s" /> */}
        <h4>
          Precio: ${data}
        </h4>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
