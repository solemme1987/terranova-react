import React, {  useContext, useRef, useState } from 'react'
import { Context } from './context/Context'
// import {Link } from 'react-router-dom'

export const Product = ({id,nameProduct,minidesc,price,imgThumbs}) => {
const {cart, setCart} = useContext(Context)
            
                // let provando=JSON.parse(localStorage.getItem('cart'));
            //   console.log(provando)
      const productId = useRef()

      const [quantity, setQuantity] = useState(0)
    //   const [cart, setCart] = useState(provando!=null ? provando: [])

    //    localStorage.setItem('')

     //  Agregamos producto al carrito HTML
      const handleAddQuantity =()=>{

           setQuantity(quantity+1);

        //    let idPro=productId.current.id;
           let proAdd={
               "id":id,
               "quantity":quantity+1,
               "name":nameProduct,
               "price:":price
           }

          addIntemCart(proAdd)

      }

    //  Agregamos producto al carrito LOCAL STORGE
      function addIntemCart(prod){

         const duplicate= cart.some(pro=>pro.id===prod.id)


         if(duplicate){
             const products = cart.map(produ=>{

                if(produ.id===prod.id){
                    produ.quantity++
                    return  produ;
                }else{
                    return produ;
                }

             });
             setCart([...products])
         }
         else{
            setCart([...cart, prod]);
         }


      }


    //   RESTANDO UNIDADES DEL CARRITO HTML
      const handleSubsQuantity =()=>{
        if(quantity>0){
              setQuantity(quantity-1);

              let proSub={
                "id":id,
                "quantity":quantity-1,
                "name":nameProduct,
                "price:":price
            }
            subsItemCart(proSub)
        }


      }

    //   RESTANDO UNIDADES DEL CARRITO LCAL STORAGE
      function subsItemCart(prod){

        const duplicate= cart.some(pro=>pro.id===prod.id)


        if(duplicate){
            const products = cart.map(produ=>{

               if(produ.id===prod.id){
                   produ.quantity--
                   return  produ;
               }else{
                   return produ;
               }

            });
            setCart([...products])
        }
        else{
           setCart([...cart, prod]);
        }
      }


    //Asignamos formato a la moneda
    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return (
        <div className="card-product animated fadeIn" id={id} ref={productId}>

            <img src={imgThumbs} alt="Imagen producto" className="card-img" />

            <div className="card-body">

            <div className="card-header">
                <h3 className="card-tittle">
                   {/* <Link to="/auth/product"> */}
                        {nameProduct}
                    {/* </Link> */}
                </h3>
                <p className="card-text">{minidesc}</p>
                <p className="card-pay">{formatter.format(price)}</p>
            </div>

            <div className="card-butns">
                <button className="subs" onClick={handleSubsQuantity}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="add"
                  onClick={handleAddQuantity }
                >+</button>
            </div>

            </div>

    </div>
    );
}
