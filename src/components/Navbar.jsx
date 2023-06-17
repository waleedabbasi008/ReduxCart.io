import {React} from 'react';
import { useDispatch } from 'react-redux';
import {
    MDBInputGroup,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartTotal } from '../App/features/CartSlice';
import { useEffect } from 'react';
import {BsCart4} from 'react-icons/bs';


export default function Navbar() {
    const { cart, totalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>

                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <NavLink to='/' style={{
                    cursor: "pointer", textDecoration: "none",
                    fontWeight: "bold", fontSize: "20px", color: "black"
                }}>  All products  </NavLink>
                <NavLink className="text-black text-decoration-none" to='/Cart'> <BsCart4 style={{fontSize:"2.5rem", paddingTop:"-1rem",
                 color:"#333", background:"transparent"}} />   ({totalQuantity}) </NavLink>


            </MDBContainer>
        </MDBNavbar>
    );
}