import React, { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import "./styles.css";
import { products } from "../../mocks/DataBase"

const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        products
        .then((res) => setData(res))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
    }, [] )

    return (
        <div className="listContainer">{greeting}
        {cargando ? <p>cargando...</p>: <ItemList data={data} />}
        
        </div>
    )
}


export default ItemListContainer

