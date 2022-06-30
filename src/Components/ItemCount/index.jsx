import React from "react";
import "./styles.css";
import useInitCount from '../../hooks/useInitCount';

const ItemCount = ({ productName, stock, onAdd, initial}) => {
  const {count, handlerClickRestar, handlerClickSumar } = useInitCount(stock, initial);

  return (
    <>
        <div className="order">
          <button onClick={handlerClickRestar}>-</button>
          <span>{count}</span>
          <button onClick={handlerClickSumar}>+</button>
          <span>({stock} disponibles)</span>
        </div>
      <button onClick={() => onAdd(count)}> Agregar al carrito</button>
      
    </>
  );
}

export default ItemCount;
