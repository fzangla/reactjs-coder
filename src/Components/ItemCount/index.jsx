import React from "react";
import a21s from "../../assets/a21s.png";
import "./styles.css";
import useInitCount from '../../hooks/useInitCount';

const ItemCount = ({ productName, stock, onAdd}) => {
  const {count, handlerClickRestar, handlerClickSumar } = useInitCount(stock);

  return (
    <article className="cards">
      <div className="card">
        <h2>{productName}</h2>
        <img className="productImg" src={a21s} alt="Celular a21s" />
        <h4>
          Precio: $<span>79.999,-</span>
        </h4>
        <div className="order">
          <button onClick={()=>handlerClickRestar()}>-</button>
          <span>{count}</span>
          <button onClick={()=>handlerClickSumar()}>+</button>
          <span>(stock: {stock})</span>
        </div>
      </div>
      <button onClick={() => onAdd=true}> Agregar al carrito</button>
      
    </article>
  );
}

export default ItemCount;
