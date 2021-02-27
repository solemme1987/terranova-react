import React from 'react'
import { Link } from 'react-router-dom';

function ProductView() {
    return (
        <>
        <Link to="/auth/home" >
                    Atras
         </Link>

            <h1>Sy la vista de del producto indivdual</h1>
        <Link to="/auth/cart" >
                   pagar
         </Link>
        </>
    )
}


export default ProductView;

