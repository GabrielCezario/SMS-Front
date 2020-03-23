import React from 'react';

export default class Emailfield extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value:'',
            isValid: false
        }
    }    

    getValue = (props) => {
        this.setState({isValid: props.valid});
    }

    getValue = (event) => {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtEmail">E-mail</label>
                <input type="text" value={this.state.value} className={"form-control" + (this.state.isValid ? 'is-invalid': '')} id="txtEmail" onChange={this.getValue}/>

                <div className="invalid-feedback">
                    Você deve preencher o campo de E-mail.
                </div>
            </div>
        );
    }
}