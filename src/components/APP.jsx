import React, {Suspense} from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from '../service/privateRoute';
import PublicRoute from '../service/publicRoute';
import AppBar from '../components/app/appBar';
import  './app/app.module.css';


const APP = () =>{
    return (
        <BrowserRouter>
          <AppBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route => {
                return route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
              <Redirect to="/login" />
            </Switch>
          </Suspense>
      </BrowserRouter>
    );
};

export default APP;


