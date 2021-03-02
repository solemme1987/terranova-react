import React, { useContext } from 'react'
import { Header } from '../../containers/Header'
import { ProductContainer } from '../../containers/ProductContainer'
import { Categories } from '../../containers/Categories'
import { Footer } from '../Footer'
import { Product } from '../Product'
import { SearchBar } from '../SearchBar'
import { TextAndLogo } from '../TextAndLogo'

// data
import {infoProduct} from '../../data/infoTerranova.json';
import { Context } from '../context/Context'



function Home() {

 const {categori,categoriName} = useContext(Context)
 let categoriRender =[];

// Validamos que la primera pantalla solo muestre la categoria recomendados
 infoProduct.forEach(element => {
     if(categori===1 && element.recommended===1 ){
        categoriRender.push(element);
     }else if(element.category===categoriName && element.category!==1){
        categoriRender.push(element);
     }
 });
   return (
        <>
            <Header>
                <SearchBar />
                <TextAndLogo />
            </Header>

            <Categories />

             <ProductContainer>
               {
                  categoriRender.map(({id,nameProduct,minidesc,price,imgThumbs})=>(
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

