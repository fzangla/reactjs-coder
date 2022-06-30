import React from "react";
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
//import ItemCount from "./Components/ItemCount";
//import { Alert } from "@mui/material";
import Item from "./Components/Item/Item";


const App = () => {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"¡Bienvenidos!"}/> 
    <Item productName='Samsung A21s' />
    </>
    )
}

export default App