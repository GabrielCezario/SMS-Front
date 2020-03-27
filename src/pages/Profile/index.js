import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import Namefield from '../../componentes/forms/nameField';
import Emailfield from '../../componentes/forms/emailField';
import Passwordfield from '../../componentes/forms/passwordConfirmField'

import profileImg from '../../img/profileImg2.png'

export default class Profile extends React.Component{
    render(){
        return(
            <div className="profile-container">

                <div className="nav">
                    <button className= "font-weight-bold ml-2"> <FaArrowLeft size={20}/> </button>
                </div> 

                <div className="content">
                    <section>
                        <img src={profileImg} alt=""/>
                        <button>CHANGE PICTURE</button>
                    </section>

                    <form action="">
                        <h1>Profile</h1>

                        <div>
                            <Namefield></Namefield>
                        </div>

                        <div>
                            <Emailfield></Emailfield>
                        </div>

                        <div>
                            <Passwordfield></Passwordfield>
                        </div>

                        <button>Cancel</button>
                        <button>Submit</button>
                    </form>

                    <p>Be carefull, this will delete account permanently</p>
                    <button>DELETE ACCOUNT</button>
                </div>
            </div>
        );
    }
}