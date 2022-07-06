import React from "react";
import NavBar from "./Components/NavBar"
// import ItemListContainer from "./Components/ItemListContainer" 
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
//import ItemCount from "./Components/ItemCount";
//import Item from "./Components/Item/Item";


const App = () => {

  return (
    <>
    <NavBar />
    {/* <ItemListContainer greeting={"¡Bienvenidos!"}  />  */}
    <ItemDetailContainer />
    </>
    )
}

export default App