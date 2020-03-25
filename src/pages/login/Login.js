import React from 'react'
import { Link } from 'react-router-dom';

import Loginfield from '../../componentes/loginField';
import Passwordfield from '../../componentes/passwordField';

import './login.css'
import '../../App.css'

export default class Login extends React.Component{

    render(){
        return(
            <div>

                <h1 align="center"> <img id="imgPitang" src={require("../../img/loginImg/pitangLogo.png")}/> </h1>
                
                <div id="formLogin">
                    <div id="line">

                    </div>

                    <span>SIGN IN</span>
                        
                    <form>
                        <div>
                            <Loginfield></Loginfield>   
                        </div>

                        <div>
                            <Passwordfield></Passwordfield>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkRememberMe"/>
                            <label className="form-check-label" htmlFor="checkRememberMe">Remember Me</label>
                        </div>

                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-success w-100 font-weight-bold">SIGN IN</button>
                        </div>
                    </form>

                    <div className="form-group">
                        <Link to="/SignUp"> <button type="button" className="btn btn-outline-secondary font-weight-bold" id="btn-login">SIGN UP</button> </Link>
                    </div>
                </div>
            </div>
        );
    }
}