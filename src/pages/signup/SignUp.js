import React from 'react';
import { Link } from 'react-router-dom'

import Namefield from '../../componentes/nameField';
import Usernamefield from '../../componentes/userNameField';
import Emailfield from '../../componentes/emailField';
import Passwordfield from './passwordField';

import './signUp.css'

export default class SignUp extends React.Component{

    render(){
        return(
            <div>

                <h1 align="center"> <img id="imgPitangSignUp" src={require("../../img/loginImg/pitangLogo.png")}/> </h1>

                <div id="formSignUp">

                    <div id="line">

                    </div>

                    <div className="form-group">
                        <Link to="/"> <button className= "btn btn-outline-secondary font-weight-bold ml-2">Back</button> </Link>
                        <span>SIGN UP</span>
                    </div>

                    <form>
                        <div>
                            <Namefield></Namefield>
                        </div>

                        <div>
                            <Usernamefield></Usernamefield>
                        </div>

                        <div>
                            <Emailfield></Emailfield>
                        </div>

                        <div>
                            <Passwordfield></Passwordfield>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkSignUp"/>
                            <label className="form-check-label" htmlFor="checkSignUp">Accept Terms of Service</label>
                        </div>

                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-success w-100 font-weight-bold mb-2" id="btn-signUp">SIGN UP</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}