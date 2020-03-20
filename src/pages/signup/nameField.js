import React from 'react';

export default class Namefield extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtName">Name</label>
                <input type="text" className="form-control" id="txtName"/>
            </div>
        );
    }
}