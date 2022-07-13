import React from "react";
import ItemCount from "../ItemCount";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({producto}) => {
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} ${producto} al carrito`);
  };
  const navegar = useNavigate()

  console.log(producto)
  
  return (
    
      <div className="detail">
        <div className="principal">
          <h2>Detalle de: {producto.name}</h2>
          <img className="productImg"  alt="Celular a21s" />
        </div>
        <div className="descripcion">
          <p>{producto.description}</p>
          <div className="precio">
            <h4>
              Precio: $<span>{producto.price}</span>
            </h4>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
        <button className="btn btn-light" onClick={()=>navegar("/producto")} >Volver a productos</button>
      </div>

  );
};

export default ItemDetail;
