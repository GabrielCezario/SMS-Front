import React from 'react';

export default class Passwordfield extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value:'',
            modified : false
        }
    }

    validateField = ()=> Boolean(this.state.value);

    getValue = (event) => {
        let state = event.target.value;
    
        if(!state){
            this.state.modified = true;
        } 

        this.setState({value: state});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtPassword">Password</label>
                <input type="password" value={this.state.value} className={"form-control " + (this.validateField() ? '': 'is-invalid')} id="txtPassword" onChange={this.getValue}/>
                <input type="password" className="form-control mt-1 " id="txtConfirmPassword"/>

                <div className="invalid-feedback">
                    You must fill Password field.
                </div>
            </div>
        );
    }
}