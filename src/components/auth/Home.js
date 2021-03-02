import React from 'react'
import { Header } from '../../containers/Header'
import { ProductContainer } from '../../containers/ProductContainer'
import { Categories } from '../Categories'
import { Footer } from '../Footer'
import { Product } from '../Product'
import { SearchBar } from '../SearchBar'
import { TextAndLogo } from '../TextAndLogo'

import {infoProduct} from '../../data/infoTerranova.json';


function Home() {


    return (
        <>
            <Header>
                <SearchBar />
                <TextAndLogo />
            </Header>

            <Categories />

             <ProductContainer>
               {
                  infoProduct.map(({id,nameProduct,minidesc,price,imgThumbs})=>(
                        <Product
                            key={id}
                            nameProduct={nameProduct}
                            minidesc={minidesc}
                            price={price}
                            imgThumbs={imgThumbs}
                        />
                    ))
                }
             </ProductContainer>

             <Footer />

        </>
    )
}


export default Home

