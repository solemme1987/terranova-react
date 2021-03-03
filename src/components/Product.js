import React, {  useRef, useState } from 'react'
import {Link } from 'react-router-dom'

export const Product = ({id,nameProduct,minidesc,price,imgThumbs}) => {

      const productId = useRef()

      const [quantity, setQuantity] = useState(0)
      const handleAddQuantity =()=>{
          setQuantity(quantity+1);
           id=productId.current.id
      }

      const handleSubsQuantity =()=>{
        if(quantity>0){
              setQuantity(quantity-1);
        }
      }


    //Asignamos formato a la moneda
    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return (
        <div className="card-product animated fadeIn" id={id} ref={productId}>

            <img src={imgThumbs} alt="Imagen producto" className="card-img" />

            <div className="card-body">

            <div className="card-header">
                <h3 className="card-tittle">
                   <Link to="/auth/product">
                        {nameProduct}
                    </Link>
                </h3>
                <p className="card-text">{minidesc}</p>
                <p className="card-pay">{formatter.format(price)}</p>
            </div>

            <div className="card-butns">
                <button className="subs" onClick={handleSubsQuantity}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="add"
                  onClick={handleAddQuantity }
                >+</button>
            </div>

            </div>

    </div>
    );
}
