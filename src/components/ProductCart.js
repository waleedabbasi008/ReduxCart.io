import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBContainer,

} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add } from '../App/features/CartSlice';

export default function ProductCart() {
    const item = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    // const addToCart = (item)=>{
    //     dispatch(add(item));
    // }
    
    return (
        <div className="m-2" style={{background:"linear-gradient(to right, rgb(137, 72, 206), rgb(59, 110, 198))"}}>
            <MDBContainer>
                <MDBRow className='mb-3 ' style={{ marginTop:"5rem"}} >
                    {
                        item.map((item) => {
                            const { id, title, price, img, quantity } = item
                            return (
                                <>

                                    <MDBCol size='4' key={id}  >
                                        <MDBCard className=' w-75 text-center mt-5' style={{height:"50vh"}} >
                                            <MDBCardImage className='w-50' style={{height:"25vh", margin:"auto"}} src={img} position='top' alt='...' />
                                            <MDBCardBody>
                                                <MDBCardTitle>{title}</MDBCardTitle>
                                                <MDBCardText>
                                                    {price}
                                                </MDBCardText>
                                                <MDBCardText>
                                                { quantity }
                                                </MDBCardText>

                                                <MDBBtn onClick={()=> dispatch(add(item))}>Add to Cart</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </>
                            )

                        })
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}