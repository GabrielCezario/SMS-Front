import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Profile from './pages/Profile/index';
import ProfileChat from './pages/ProfileChat/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={SignUp}/>
                <Route exact path="/Username" component={ProfileChat}/>
                <Route exact path="/Username/Profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}