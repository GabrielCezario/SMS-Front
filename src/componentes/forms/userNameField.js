import React from 'react';

export default class Usernamefield extends React.Component{

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
            // this.state.modified = true;
            this.setState({modified: true});
        } 

        this.setState({value: state});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtUsername">Username</label>
                <input 
                    type="text" 
                    id="txtUsername" 
                    value={this.state.value} 
                    className={"form-control " + (this.validateField() ? '': 'is-invalid')} 
                    onChange={this.getValue}
                />
                
                <div className="invalid-feedback">
                    You must fill Username field.
                </div>
            </div>
        );
    }
}