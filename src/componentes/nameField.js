import React from 'react';

export default class Namefield extends React.Component{

    constructor(){
        super();

        this.state = {value:''}
    }

    getValue = (event) => {
        this.setSate({value: event.target.value});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="txtName">Name</label>
                <input type="text" className="form-control" id="txtName" onChange={}/>
                
                <div className="invalid-feedback">
                    Você deve preencher o campo de Name.
                </div>
            </div>
        );
    }
}