import React from 'react'

export const ProductDescription = () => {
    return (
        <div className="product-description">
        <h1>hamburguesa de la casa</h1>
        <p>
           Pan artesanal, carne de la casa, tocineta, queso
           americano, cebolla carmelizada, lechuga y tomate.
        </p>

        <div className="price-container">
         <div className="price-container-body">
            <span className="price">$15.000</span>
            <div className="card-buttons">
               <button className="subs">
                  -
               </button>
               <span className="quantity">2</span>
               <button className="add">
                  +
               </button>
            </div>
         </div>
        </div>
     </div>
    )
}
