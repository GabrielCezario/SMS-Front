import React from 'react';

export default class Emailfield extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtEmail">E-mail</label>
                <input type="text" className="form-control" id="txtEmail"/>
            </div>
        );
    }
}