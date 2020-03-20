import React from 'react';

export default class Passwordfield extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtPassword">Password</label>
                <input type="password" className="form-control" id="txtPassword"/>
                <input type="password" className="form-control" id="txtConfirmPassword"/>
            </div>
        );
    }
}