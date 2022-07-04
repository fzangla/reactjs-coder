import React from "react";
import a21s from "../../assets/a21s.png";
import a21s1 from "../../assets/a21sfront.png";
import a21s2 from "../../assets/a21sback.png";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = () => {
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad}  al carrito`);
  };
  return (
    <>
      <div className="detail">
        <div className="columna-img">
          <img className="img-detail" src={a21s} alt="celular a21s" />
          <img className="img-detail" src={a21s1} alt="celular a21s frente" />
          <img className="img-detail" src={a21s2} alt="celular a21s atras" />
        </div>
        <div className="principal">
          <h2>product name</h2>
          <img className="productImg" src={a21s} alt="Celular a21s" />
        </div>
        <div className="description">
          <p className="parrafo">
            Celular samsung Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illum doloremque ut officia illo fugit labore suscipit autem
            officiis non ipsa voluptatibus dicta voluptatum reprehenderit,
            dolorem eum recusandae. Saepe rem voluptatibus ipsa deserunt,
            placeat praesentium a quod modi facere quisquam quae nisi voluptas
            dicta expedita facilis, vero id aliquam neque quidem?
          </p>
          <div className="precio">
            <h4>
              Precio: $<span>79.999,-</span>
            </h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
