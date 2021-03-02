import React from 'react'
import {Link } from 'react-router-dom'
// import imgProduct from '../assets/img/hamburg/hmgcasa.png'
export const Product = ({id,nameProduct,minidesc,price,imgThumbs}) => {



    // const [image, setImage] = useState(imgThumbs);

       console.log(imgThumbs)
    return (
        <div className="card-product">

            <img src={imgThumbs} alt="Imagen producto" className="card-img" />

            <div className="card-body">

            <div className="card-header">
                <h3 className="card-tittle">
                   <Link to="/auth/product">
                        {nameProduct}
                    </Link>
                </h3>
                <p className="card-text">{minidesc}</p>
                <p className="card-pay">{price}</p>
            </div>

            <div className="card-butns">
                <button className="subs">-</button>
                <span className="quantity">0</span>
                <button className="add">+</button>
            </div>

            </div>

    </div>
    );
}
