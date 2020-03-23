import React from 'react';

export default class Usernamefield extends React.Component{

    constructor(){
        super();

        this.state = {value:''}
    }

    getValue = (event) => {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtUsername">Username</label>
                <input type="text" className="form-control" id="txtUsername" onChange={this.getValue}/>
                
                <div className="invalid-feedback">
                    Você deve preencher o campo de Username.
                </div>
            </div>
        );
    }
}