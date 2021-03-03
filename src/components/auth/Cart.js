import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Header } from '../../containers/Header'
import { ProductContainer } from '../../containers/ProductContainer'
import { Context } from '../context/Context'
import { DataPay } from '../DataPay'
import { Product } from '../Product'
import { SearchBar } from '../SearchBar'

const Cart = ()=> {
const {cart} = useContext(Context)



 for (const iterator of cart) {
     console.log(`${iterator.nameProduct } ${iterator.price}`)
 }


    const clasN="searchBar carrito";
    return (

        <>
          <Header>
              <SearchBar
                clasN={clasN}
              />
          </Header>
          <ProductContainer>
              {
               cart.map(({id,nameProduct,minidesc,price,imgThumbs,quantity,totalCart})=>(
                        <Product
                            key={id}
                            nameProduct={nameProduct}
                            minidesc={minidesc}
                            price={price}
                            imgThumbs={imgThumbs}
                            id={id}
                            quantity={quantity}
                            totalCart={price*quantity}
                        />
                    ))
}
          </ProductContainer>
          <DataPay />
        </>
    )
}



export default Cart
