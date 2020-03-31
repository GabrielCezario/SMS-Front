import React from 'react';

export default class Loginfield extends React.Component{

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
            this.setState({modified: true});
        } 

        this.setState({value: state});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtLogin">Login</label>
                <input 
                    type="text" 
                    value={this.state.value} 
                    className={"form-control " + (this.validateField() ? '': 'is-invalid')} 
                    id="txtLogin" 
                    onChange={this.getValue}
                />
                
                <div className="invalid-feedback">
                    You must fill login field.
                </div>
            </div>
        );
    }
}