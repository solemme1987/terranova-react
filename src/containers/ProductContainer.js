import React from 'react'

export const ProductContainer = ({children}) => {
    return (
        <section className="productSection" id="productSection">
            {children}
        </section>
    )
}
