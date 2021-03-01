import React from 'react'
import { Header } from '../../containers/Header'
import { ProductInfoContainer } from '../../containers/ProductInfoContainer'
import { SearchBar } from '../SearchBar'

import imgInfo from '../../assets/img/hamburg/delaCasaInfo.jpg'
import { ProductDescription } from '../ProductDescription'
import { Personalization } from '../Personalization'
import { Footer } from '../Footer'

 function ProductView(){
    return (
        <>
         <ProductInfoContainer>
                <Header>
                    <SearchBar />
                </Header>
           <section className="productInfo" id="productInfo">

                <div className="img-info-container">
                    <img src={imgInfo} alt="Info burgerHouse"/>
                </div>

                <ProductDescription />

                <div className="config-title-box">
                    <h3 className="config-tittle">Personaliza</h3>
                    <p>Como prefieras</p>
                </div>

                <Personalization />

                <Footer />

            </section>
         </ProductInfoContainer>
        </>
    )
}
export default ProductView;