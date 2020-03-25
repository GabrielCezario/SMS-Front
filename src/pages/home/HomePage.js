import React from 'react';

import Login from '../login/Login';
import SignUp from '../signup/SignUp';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default class HomePage extends React.Component{

    render(){
        return(
            <div className="home-page">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/SignUp" component={SignUp}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}