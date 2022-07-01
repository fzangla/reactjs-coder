import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data = [] }) => {
  return (
    <>
      {data.map(producto => <Item key={data.id} articulo={producto} productName="Samsung A21s" />)}
      
    </>
  );
};

export default ItemList;
