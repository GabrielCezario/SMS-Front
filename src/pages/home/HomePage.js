import React from 'react';
import Login from '../login/Login'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default class HomePage extends React.Component{

    constructor(){
        super();

        this.state = {
            showLogin: false
        }
    }

    goToLogin() {
        this.setState({showLogin: true});
    }

    goToRegister() {
        this.setState({showLogin: false});
    }

    // renderLogin(){
    //     console.log("Chamou a função Login")
    //     return <Login onRegister={() => this.goToLogin()} />
    // }

    // renderSignUp(){
    //     console.log("Chamou a função SignUp")
    //     return <SignUp onLogin={() => this.goToRegister()}/>
    // }

    render(){
        return(
            <div className="home-page">

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                    </Switch>
                </BrowserRouter>

                {/* {(this.state.showLogin ? this.renderSignUp() : this.renderLogin())} */}
            </div>
        );
    }

}