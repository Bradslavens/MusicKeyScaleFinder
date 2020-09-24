import React, { Component } from 'react';

class Results extends Component {
    constructor(props){
        super(props);
    }

    render(){

        let a = [];

        for(var key in this.props.scaleMatches){

            for(var type in this.props.scaleMatches[key]){

                let scale = this.props.scaleMatches[key][type];
                
            a.push(
                <p>
                    <h1>{key}</h1>
                    <h3>{type}</h3>                    
                    <h3>{scale}</h3>
                </p>
                );

            }
        }
        return(
            <div>
                {a}
            </div>
        )
    }
}

export default Results