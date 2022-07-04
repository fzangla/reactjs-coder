import React, { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import a21s from '../../assets/a21s.png';
import a01 from '../../assets/SamsungA01.png';
import "./styles.css";


const Product = [
    {id: 1, name:'A21s', image:{a21s}, price: 79.999},
    {id: 2, name:'A01', image:{a01}, price: 57.999},
  ]
const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([])

    useEffect(() =>{
        const getData = new Promise (res =>{
            setTimeout(() =>{
                res (Product);
           }, 2000)
        })
        getData.then(res => setData(res));
    }, [])

    return (
        <div className="listContainer">{greeting}
        <ItemList data={data} />
        </div>
    )
}


export default ItemListContainer

