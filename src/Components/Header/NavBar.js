import React from "react";
import logo from "../../assets/LogoTienda.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () =>{
    return ( 
        <header style={styles.container}>
        <img style={styles.imagen} src={logo} alt="logo" />
        <h1 style={styles.title}>Ecommerce</h1>
        <nav>
            <a style={styles.anchors} href="#">Hogar y muebles</a>
            <a style={styles.anchors} href="#">Electrodomesticos</a>
            <a style={styles.anchors} href="#">Tecnología</a>
        </nav>
        <ShoppingCartIcon color="action" fontSize="large" />
        </header>
    )
}

const styles= {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4b819c',
        color: '#fff',
        paddingRight: 50,
        paddingLeft: 10,
        fontFamily: 'arial',
       
        
    },
    imagen: {
        width: '15%',
    },
    anchors: {
        padding: 10,
        textDecoration: 'none',
        color: '#fff',
        // hover: {
        //     color: 'blue',
        // }
    },
    title: {
        color: 'black',
        textTransform: 'uppercase',
    }
}

export default NavBar
