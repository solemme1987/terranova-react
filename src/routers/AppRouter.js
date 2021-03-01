import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import LoginScreen from '../components/login/LoginScreen';
import {AuthRouter} from './AuthRouter';

export const AppRouter = () => {

    return(
      <Router>
           <>
              <Switch>
                  <Route
                    path="/auth"
                    component={  AuthRouter }
                  />

                 <Route
                    exact
                    path="/"
                    component={ LoginScreen  }
                  />
                   <Redirect to="/" />
              </Switch>

             </>
      </Router>
   )
}
