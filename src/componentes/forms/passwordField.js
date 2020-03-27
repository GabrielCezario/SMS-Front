import React from 'react';

export default class Passwordfield extends React.Component{

    constructor(){
        super();

        this.state = {
            value:'',
            modified: false
        }

    }

    validateField = ()=> Boolean(this.state.value);

    getValue = (event) => {
        this.setState({value: event.target.value});

        if(!this.state.value){
            this.state.modified = true;
        } 
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtPassword">Password</label>
                <input type="password" value={this.state.value} className={"form-control " + (this.validateField() ? '' : 'is-invalid')} id="txtPassword" onChange={this.getValue}/>
                
                <div className="invalid-feedback">
                    You must fill Password field.
                </div>
            </div>
        );
    }
}