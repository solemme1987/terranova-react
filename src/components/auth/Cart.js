import React from 'react'
// import { Link } from 'react-router-dom'
import { Header } from '../../containers/Header'
import { ProductContainer } from '../../containers/ProductContainer'
import { DataPay } from '../DataPay'
import { Product } from '../Product'
import { SearchBar } from '../SearchBar'

const Cart = props => {
    const clasN="searchBar carrito";
    return (

        <>
          <Header>
              <SearchBar
                clasN={clasN}
              />
          </Header>
          <ProductContainer>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
          </ProductContainer>
          <DataPay />
        </>
    )
}



export default Cart
