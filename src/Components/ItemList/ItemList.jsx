import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <Item key={data.id} articulo={data} />
      ))}
    </>
  );
};

export default ItemList;
