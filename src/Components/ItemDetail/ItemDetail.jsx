import React from "react";
import a21s from "../../assets/a21s.png";
// import a21s1 from "../../assets/a21sfront.png";
// import a21s2 from "../../assets/a21sback.png";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({producto}) => {
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} ${producto} al carrito`);
  };
  return (
    
      <div className="detail">
        {/* <div className="columna-img">
          <img className="img-detail" src={a21s} alt="celular a21s" />
          <img className="img-detail" src={a21s1} alt="celular a21s frente" />
          <img className="img-detail" src={a21s2} alt="celular a21s atras" />
        </div> */}
        <div className="principal">
          <h2>{producto.name}</h2>
          <img className="productImg" src={a21s} alt="Celular a21s" />
        </div>
        <div className="descripcion">
          <p>{producto.description}</p>
          <div className="precio">
            <h4>
              Precio: $<span>{producto.price}</span>
            </h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>

  );
};

export default ItemDetail;
