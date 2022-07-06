import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../mocks/DataBase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    products
    .then((res) => setProducto (res.find((item) => item.id === '01')))
    .catch((error) => alert(error))
    .finally(() => setCargando(false))
  }, []);

  return (
    <div>
      <h2>
        {cargando ? <p>cargando...!!</p> : <ItemDetail producto={producto} />}
      </h2>
    </div>
  );
};

export default ItemDetailContainer;
