import React from "react";
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
//import ItemCount from "./Components/ItemCount";
//import { Alert } from "@mui/material";
//import Item from "./Components/Item/Item";


const App = () => {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"¡Bienvenidos!"}  /> 
    {/* greeting={"¡Bienvenidos!"} OJO Lo saque para probar*/}
    </>
    )
}

export default App