import React from "react";
import ItemCount from "../ItemCount";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({producto}) => {
  
  console.log({producto}); //undefined

  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} ${producto} al carrito`);
  };
  const navegar = useNavigate()

  
  return (
    
      <div className="detail">
        <div className="principal">
          <h2>Detalle de: {producto}</h2>
          <img className="productImg"  alt="Celular a21s" />
        </div>
        <div className="descripcion">
          <p>{producto}</p>
          <div className="precio">
            <h4>
              Precio: $<span>{producto}</span>
            </h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
        <button className="btn btn-light" onClick={()=>navegar("/producto")} >Volver a productos</button>
      </div>

  );
};

export default ItemDetail;
