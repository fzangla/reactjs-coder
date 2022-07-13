import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducts } from "../../mocks/DataBase";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const { productoId } = useParams();
 
  useEffect(() => {
    getProducts
      .then((res) => setProducto(res.find((item) => item.id === 'productoId')))
      .catch((error) => alert(error))
      .finally(() => setCargando(false));
  }, [productoId]);
  console.log(producto);
  return (
    <div>
        {cargando ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow d-flex justify-content-center "
              role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ItemDetail productDetail={producto} />
        )}
    </div>
  );
};

export default ItemDetailContainer;
