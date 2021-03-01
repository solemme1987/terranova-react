import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="menu-bar">
           
          <Link to="/auth/cart">
               <div className="car-button-container">
                  <i className="fas fa-shopping-cart car-button"></i>
                  <span className="quantity">4</span>
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
