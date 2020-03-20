import React from 'react';

export default class Usernamefield extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtUsername">Username</label>
                <input type="text" className="form-control" id="txtUsername"/>
            </div>
        );
    }
}