import React from "react";
import Item from "../Item/Item";
import "./styles.css";


const ItemList = ({ data }) => {

 

  return (
        <div className="col-m-6">
          <h3>Listado de nuestros productos</h3>
          <div className="item-list">
          {data.map((product)=><Item key={product.productoId} product={product}/>)}
          </div>
        </div>
  );
};

export default ItemList;
