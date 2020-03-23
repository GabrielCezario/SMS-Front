import React from 'react';

export default class Passwordfield extends React.Component{

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
                <label htmlFor="txtPassword">Password</label>
                <input type="password" className="form-control" id="txtPassword" onChange={this.getValue}/>
                
                <div className="invalid-feedback">
                    Você deve preencher o campo de Password.
                </div>
            </div>
        );
    }
}