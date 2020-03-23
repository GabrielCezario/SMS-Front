import React from 'react';

export default class Loginfield extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value:'',
            isValid: false
        }
    }

    getValue = (event) => {
        this.setState({value: event.target.value});

        if(this.state.value){
            this.setState({isValid: true});
        } else {
            this.setState({isValid: false});
        }
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtLogin">Login</label>
                <input type="text" value={this.state.value} className={"form-control " + (this.state.isValid ? '': 'is-invalid')} id="txtLogin" onChange={this.getValue}/>
                
                <div className="invalid-feedback">
                    Você deve preencher o campo de Login.
                </div>
            </div>
        );
    }
}