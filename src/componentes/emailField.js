import React from 'react';

export default class Emailfield extends React.Component{

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
                <label htmlFor="txtEmail">E-mail</label>
                <input type="text" value={this.state.value} className={"form-control " + (this.validateField() ? '': 'is-invalid')} id="txtEmail" onChange={this.getValue}/>

                <div className="invalid-feedback">
                You must fill E-mail field.
                </div>
            </div>
        );
    }
}