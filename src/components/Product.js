import React, {  useContext, useRef, useState } from 'react'
import { Context } from './context/Context'
// import {Link } from 'react-router-dom'

export const Product = ({id,nameProduct,minidesc,price,imgThumbs,quantity=0,totalCart}) => {
const {cart, setCart} = useContext(Context)


      const productId = useRef()


      const [quan, setQuan] = useState(quantity)


     //  Agregamos producto al carrito HTML
      const handleAddQuantity =()=>{

           setQuan(quan+1);

        //    let idPro=productId.current.id;
           let proAdd={
               "id":id,
               "quantity": quan+1,
               "nameProduct": nameProduct,
               "minidesc": minidesc,
               "price": price,
               "imgThumbs":imgThumbs,
               "totalCart":0

           }
           if (cart.length===0){
              console.log('El carrito esta vacio')
              setCart(c=>c=[...c,proAdd])
           }else{
             addIntemCart(proAdd)
           }

          // addIntemCart(proAdd)

      }

    //  Agregamos producto al carrito LOCAL STORGE
      function addIntemCart(proAdd){

         const duplicate= cart.some(pro=>pro.id===proAdd.id)

         if(duplicate){

             const products = cart.map((produ)=>{

                if(produ.id===proAdd.id){
                    produ.quantity++
                    return  produ;
                }else{
                    return produ;
                }

             });
             setCart(c=>c=[...products])

         }

         else{
           setCart(c=>c=[...c,proAdd])
         }
      }


    //   RESTANDO UNIDADES DEL CARRITO HTML
      const handleSubsQuantity =()=>{


        if(quan>0){
              setQuan(quan-1);
              let proSub={
               "id":id
              }
            subsItemCart(proSub);
        }

        if(cart.length===1 && cart[0].quantity===0){
           setCart(c=>c=[]);
        }

      }

      // RESTANDO UNIDADES DEL CARRITO LCAL STORAGE
      function subsItemCart(proSub){

        const duplicate= cart.some(pro=>pro.id===proSub.id)

        if(duplicate){
           console.log('el id  se encuentra registrado par restar')
            const products = cart.map(produ=>{

               if(produ.id===proSub.id){
                   produ.quantity--
                   return  produ;
               }else{
                   return produ;
               }

            });
            console.log(products)
            setCart(c=>c=[...products])
        }
        else{
          setCart(c=>c=[...c,proSub])
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
                <p className="card-pay">{formatter.format(totalCart ? totalCart :price)}</p>
            </div>

            <div className="card-butns">
                <button className="subs" onClick={handleSubsQuantity}>-</button>
                <span className="quantity">{quan}</span>
                <button className="add"onClick={handleAddQuantity }>+</button>
            </div>

            </div>

    </div>
    );
}
