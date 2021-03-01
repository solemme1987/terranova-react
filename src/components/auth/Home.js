import React from 'react'
import { Header } from '../../containers/Header'
import { ProductContainer } from '../../containers/ProductContainer'
import { Categories } from '../Categories'
import { Footer } from '../Footer'
import { Product } from '../Product'
import { SearchBar } from '../SearchBar'
import { TextAndLogo } from '../TextAndLogo'


function Home() {
    return (
        <>
            <Header>
                <SearchBar />
                <TextAndLogo />
            </Header>

            <Categories />

             <ProductContainer>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
             </ProductContainer>

             <Footer />

        </>
    )
}


export default Home

