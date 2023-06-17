import React from 'react'
import { MdDelete } from 'react-icons/md';
import { BiHeart } from 'react-icons/bi';
import ProductData from '../ProductData';
import { useEffect } from 'react';
import { removeItem } from '../App/features/CartSlice';
import { getCartTotal } from '../App/features/CartSlice';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);
    return (
        <>

            <h2> Cart {cart.quantity} items </h2>
            <section id="cart" className='d-flex' style={{ flexDirection: "column", gap: "3rem" }}>

                <div className="showItems card" style={{
                    marginLeft: "5rem", height: "fit-content",
                    background: " linear-gradient(to right, rgb(148, 96, 205), rgb(112, 154, 227)) ",
                    width: "25%",
                }}>
                    <div className="container card-body " >
                        <h3 className='text-center'> Summary </h3>
                        <p> Total quantity ---------------------------- {totalQuantity} </p>
                        <p> Total amount ---------------------------- {totalPrice} </p>
                        <hr />
                        <button className="btn btn-outline-secondary bg-primary text-light"> Go to checkOut </button>
                    </div>
                </div>
                {
                    cart.map((data) => {
                        return (
                            <div className="cartContainer d-flex gap-16 border border-success text-light h-80 w-50 text-center" style={{
                                background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
                                borderRadius: " 25px ",
                            }} >
                                <div className="image">
                                    <img className='h-75 w-75 ' style={{
                                        marginTop: "5vh", background: "transparent",
                                    }} src={data.img} alt="" />
                                </div>
                                <div className="text">
                                    <h3> {data.title} </h3>
                                    <br /> <br />
                                    <p> color : blue </p>
                                    <p> price : {data.price} </p>
                                    <br /><br />
                                    <p> Size: M </p>
                                    <br /><br />
                                    <div className="buttons d-flex justify-content-around">
                                        <button className="btn btn-primary" onClick={()=> dispatch(removeItem(data.id))}> <MdDelete /> </button>
                                        <button className="btn btn-danger "> <BiHeart />  </button>
                                    </div>
                                    <div className="quantity d-flex justify-content-around" style={{ marginTop: "3rem" }}>
                                        {/* <button className="btn btn-primary"> - </button> */}
                                        <input type="number" className='w-25' value={data.quantity} />
                                        {/* <button className="btn btn-primary"> + </button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Cart;