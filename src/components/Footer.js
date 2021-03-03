import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from './context/Context'

export const Footer = () => {

  const {cart} = useContext(Context)

   let plus =0;

    for(let item of cart){
      plus=plus+item.quantity
   }


    return (
        <footer className="menu-bar">

          <Link to="/auth/cart">
               <div className="car-button-container">
                  <i className="fas fa-shopping-cart car-button"></i>
                  <span className="quantity">{plus}</span>
               </div>
           </Link>

           <div className="inner-menu-bar">
            <Link to="/auth/home">
              <i className="fas fa-home home"></i>
            </Link>
              <i className="fas fa-cog open-menu"></i>
           </div>

        </footer>
    )
}
