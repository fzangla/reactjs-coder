import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Item = ({ product }) => {
  const navegar = useNavigate();

  return (
    <div className="card text-center text-bg-light mb-3 tarjeta">
      <img className="card-img-top" src={product.img} alt="celular a21s" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => navegar(`/producto/ ${product.productoId} `)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Item;
