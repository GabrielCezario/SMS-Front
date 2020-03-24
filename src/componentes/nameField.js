import React from 'react';

export default class Namefield extends React.Component{

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
                <label htmlFor="txtName">Name</label>
                <input type="text" id="txtName" value={this.state.value} className={"form-control " + (this.validateField() ? '': 'is-invalid')} onChange={this.getValue}/>
                
                <div className="invalid-feedback">
                You must fill Name field.
                </div>
            </div>
        );
    }
}