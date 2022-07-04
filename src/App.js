import React from "react";
import NavBar from "./Components/NavBar"
// import ItemListContainer from "./Components/ItemListContainer" 
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
//import ItemCount from "./Components/ItemCount";
//import { Alert } from "@mui/material";
//import Item from "./Components/Item/Item";


const App = () => {

  return (
    <>
    <NavBar />
    {/* <ItemListContainer greeting={"¡Bienvenidos!"}  />  */}
    <ItemDetailContainer />
    {/* greeting={"¡Bienvenidos!"} OJO Lo saque para probar*/}
    </>
    )
}

export default App