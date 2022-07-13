import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"¡Bienvenidos!"} />}
        />
        <Route path="/producto" element={<ItemListContainer greeting={"¡Bienvenidos!"} />}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={"¡Bienvenidos!"} />}/>
        <Route
          path="/producto/:productoId"
          element={<ItemDetailContainer />} />
        <Route
          path="/cart"
          element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
