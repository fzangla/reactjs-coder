import React, { useState, useEffect } from "react";
import "./styles.css";
import { products } from "../../mocks/DataBase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);

  const categoriaId = useParams();
  // HACER FILTER!!!!
  useEffect(() => {
    products
      .then((res) => setData(res))
      .catch((error) => alert(error))
      .finally(() => setCargando(false));
  }, [categoriaId]);

  return (
    <div className="listContainer">
      <div>
        {greeting}
        {cargando ? <p>cargando...</p> : <ItemList data={data} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
