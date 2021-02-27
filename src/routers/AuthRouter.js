import React from 'react'
import { Redirect,Switch, Route } from 'react-router-dom'
import Cart from '../components/auth/Cart';
import Home from '../components/auth/Home';




function AuthRouter(){
    return (
        <div>
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

                  <Redirect to="/auth/login"/>
            </Switch>
        </div>
    )
}


export default AuthRouter

