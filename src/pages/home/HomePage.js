import React from 'react';
import Login from '../login/Login'
import SignUp from '../signup/SignUp'

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

    renderLogin(){
        console.log("Chamou a função Login")
        return <Login onRegister={() => this.goToLogin()} />
    }

    renderSignUp(){
        console.log("Chamou a função SignUp")
        return <SignUp onLogin={() => this.goToRegister()}/>
    }

    render(){
        return(
            <div className="home-page">
                {(this.state.showLogin ? this.renderSignUp() : this.renderLogin())}
            </div>
        );
    }

}