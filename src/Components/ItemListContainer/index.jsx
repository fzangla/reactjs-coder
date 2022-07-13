import React, { useState, useEffect } from "react";
import "./styles.css";
import { getProducts } from "../../mocks/DataBase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    getProducts
    .then((res) => {
      if (!categoriaId) {
        setListaProductos(res);
      } else {
        setListaProductos((res) => res.filter((item) => item.category === categoriaId));
      }
    })
    .catch((error) => alert(error))
    .finally(() => setCargando(false));
  }, [categoriaId]);

  return (
    <div className="listContainer">
      <div>
        {greeting} 
        {cargando ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>) : 
        (<ItemList data={ listaProductos } />)}
      </div>
    </div>
  );
};

export default ItemListContainer;
