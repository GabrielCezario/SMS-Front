import React from 'react';

export default class Loginfield extends React.Component{

    constructor(){
        super();

        this.state = {
            loginField: '',
        }

    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtLogin">Login</label>
                <input type = "text" className="form-control" id="txtLogin"/>
            </div>
        );
    }
}