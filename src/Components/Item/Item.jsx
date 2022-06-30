import React from "react";
import a21s from '../../assets/a21s.png';
import ItemCount from "../ItemCount";
import '../ItemCount/styles.css'

const Item = ({productName}) => {

  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} ${productName} al carrito`)
  }

  return (
    <div className="div-container">
      <div className="card">
        <h2>{productName}</h2>
        <img className="productImg" src={a21s} alt="Celular a21s" />
        <h4>
          Precio: $<span>79.999,-</span>
        </h4>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
