import React, { useContext } from 'react'
import { Header } from '../../containers/Header'
import { ProductContainer } from '../../containers/ProductContainer'
import { Categories } from '../../containers/Categories'
import { Footer } from '../Footer'
import { Product } from '../Product'
import { SearchBar } from '../SearchBar'
import { TextAndLogo } from '../TextAndLogo'
import { Context } from '../context/Context'
import { SideBar } from '../SideBar'


function Home() {

 const {idcategori,categoriName, infoProduct, productFinded} = useContext(Context)

 let productRender =[];


// Validamos que la primera pantalla solo muestre la categoria recomendados

 infoProduct.forEach(element => {

     if(idcategori===1 && element.recommended===1 ){
        productRender.push(element);
     }else if(element.category===categoriName && element.category!==1){
        productRender.push(element);
     }
 });

 if(productFinded.length > 0){
    productRender=[...productFinded];
 }


    return (
        <>
           <SideBar />

            <Header>
                <SearchBar />
                <TextAndLogo />
            </Header>

            <Categories />

                <ProductContainer>
                {
                    productRender.map(({id,nameProduct,minidesc,price,imgThumbs})=>(
                        <Product
                            key={id}
                            nameProduct={nameProduct}
                            minidesc={minidesc}
                            price={price}
                            imgThumbs={imgThumbs}
                            id={id}
                        />
                    ))
                }
                </ProductContainer>

                <Footer />

        </>
    )
}

export default Home

