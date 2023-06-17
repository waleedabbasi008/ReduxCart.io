import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import ProductCart from './components/ProductCart';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>

        <Navbar />
        <Routes>
            <Route exact path='/' element = {<ProductCart />} />
            <Route exact path='/Cart' element = {<Cart />} />
        </Routes>

        

       
        </>
    )
}

export default App;