import React from 'react'
import { Link } from 'react-router-dom'
import imgProduct from '../assets/img/hamburg/hmgcasa.png'
export const Product = () => {
    return (
        <div className="card-product">
            <img src={imgProduct} alt="Imagen producto" className="card-img" />
            <div className="card-body">

            <div className="card-header">
                <h3 className="card-tittle">
                   <Link to="/auth/product">
                        Hamburguesa de la casa
                    </Link>
                </h3>
                <p className="card-text">Más vendido</p>
                <p className="card-pay">$15.000</p>
            </div>

            <div className="card-buttons">
                <button className="subs">-</button>
                <span className="quantity">2</span>
                <button className="add">+</button>
            </div>

            </div>

    </div>
    );
}
