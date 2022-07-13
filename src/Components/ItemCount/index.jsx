import React from "react";
import useInitCount from '../../hooks/useInitCount';

const ItemCount = ({ productName, stock, onAdd, initial}) => {
  const {count, handlerClickRestar, handlerClickSumar } = useInitCount(stock, initial);

  return (
    <>
        <div className="order">
          <button className="btn btn-danger" onClick={handlerClickRestar}>-</button>
          <span className="btn ">{count}</span>
          <button className="btn btn-success" onClick={handlerClickSumar}>+</button>
          <span>({stock} disponibles)</span>
        </div>
      <button  className="btn btn-dark" onClick={() => onAdd(count)}> Agregar al carrito</button>
      
    </>
  );
}

export default ItemCount;
