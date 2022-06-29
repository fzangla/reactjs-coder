import React from "react";
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemCount from "./Components/ItemCount";
import useItemCount from "./hooks/useInitCount";

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"¡Bienvenidos!"}/> 
    <ItemCount stock={5} initial={1} productName='Samsung A21s' onAdd={false} /> 
    <useItemCount />
    </>
 
    )
}

export default App