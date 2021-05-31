import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Home from './Component/Home'
import Details from './Component/Details';
import update from './Component/update'



const  Router =()=>{
    return(
        <BrowserRouter>
        <Route exact path ="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/signup" component={Registration} />
        <Route exact path="/userupdatePage" component={update} />
        
        </BrowserRouter>
    )
}
export default Router;