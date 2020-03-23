import React from 'react';

import Namefield from '../../componentes/nameField';
import Usernamefield from '../../componentes/userNameField';
import Emailfield from '../../componentes/emailField';
import Passwordfield from './passwordField';

export default class MainsignUp extends React.Component{
    render(){
        return(
            <div>

                <h1 align="center"> <img id="imgPitang" src={require("../../img/loginImg/pitangLogo.png")}/> </h1>

                <div id="line">

                </div>

                <button>Back</button>
                <span>SIGN UP</span>

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

                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-secondary font-weight-bold" >SIGN UP</button>
                    </div>
                </form>

            </div>
        );
    }
}