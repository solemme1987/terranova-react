import React from 'react'

export const Categories = () => {
    return (
        <div className="categoryBox" id="categoryBox">
            <h3 className="categoryTittle">Categorías</h3>
            <div className="listCategories">
                <button className="btn-list-item active">Recomendado</button>
                <button className="btn-list-item">Hamburguesa</button>
                <button className="btn-list-item">Perros</button>
                <button className="btn-list-item">Salchipapas</button>
                <button className="btn-list-item">Hamburguesa</button>
                <button className="btn-list-item">Perros</button>
                <button className="btn-list-item">Salchipapas</button>
            </div>
            <h3 className="productTittleCat">Recomendado</h3>
        </div>
    )
}
