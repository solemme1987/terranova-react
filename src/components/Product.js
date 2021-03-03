import React from 'react'
import {Link } from 'react-router-dom'

export const Product = ({id,nameProduct,minidesc,price,imgThumbs}) => {

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return (
        <div className="card-product animated fadeIn">

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
                <button className="subs">-</button>
                <span className="quantity">0</span>
                <button className="add">+</button>
            </div>

            </div>

    </div>
    );
}
