import React from "react";
import "./styles.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () =>{
    return ( 
        <div>
            <ShoppingCartIcon color="action" fontSize="large" />
            <span class="cartCount">
                1
            </span>
        </div>
            
    )
}


export default CartWidget
