import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';


import Namefield from '../../componentes/forms/nameField';
import Emailfield from '../../componentes/forms/emailField';
import Passwordfield from '../../componentes/forms/passwordConfirmField'

import profileImg from '../../img/profileImg2.png'

import './style.css'

export default class Profile extends React.Component{
    render(){
        return(
            <div className="profile-container">

                <div className="header">
                    <button className= "font-weight-bold ml-2"> <FaArrowLeft size={28}/> </button>
                </div> 

                <div className="content">
                    <section>
                        <div className="row">
                            <img src={profileImg} alt="Profile picture"/> 
                        </div>

                        <div className="row">
                            <button className="btn btn-light">CHANGE PICTURE</button>
                        </div>
                    </section>

                    <div className="main-content">
                        <form action="">
                            <h1>Profile</h1>

                            <div>
                                <Namefield></Namefield>
                            </div>

                            <div>
                                <Emailfield></Emailfield>
                            </div>

                            <div className="confirmPassword">
                                <Passwordfield></Passwordfield>
                            </div>

                            <div className="divButton">
                                <button className="btn btn-light">Cancel</button>
                                <button className="btn btn-success" style={{color:"white"}}>Submit</button>
                            </div>
                        </form>

                        <footer className="d-flex justify-content-end">
                            <p>Be carefull, this will delete account permanently</p>
                            <button className="btn btn-danger">DELETE ACCOUNT</button>    
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}