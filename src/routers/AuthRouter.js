import React from 'react'
import { Redirect,Switch, Route } from 'react-router-dom'
import Cart from '../components/auth/Cart';
import Home from '../components/auth/Home';
import ProductView from '../components/auth/ProductView';

export const AuthRouter=()=>{
    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/auth/home"
                    component={ Home }
                  />

                 <Route
                    exact
                    path="/auth/cart"
                    component={  Cart }
                  />
                  <Route
                    exact
                    path="/auth/product"
                    component={  ProductView }
                  />

                  <Redirect to="/" />
            </Switch>
        </>
    )
}




