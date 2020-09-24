import React, { Component } from 'react';

class Results extends Component {

    render(){

        let a = [];

        for(var key in this.props.scaleMatches){

            for(var type in this.props.scaleMatches[key]){

                let scale = this.props.scaleMatches[key][type];
                
            a.push(
                <p class="bg-gray-400 p-3 m-3">
                    <h1>Key: {key}</h1>
                    <h3>Type: {type}</h3>                    
                    <h3>Scale: {scale}</h3>
                </p>
                );

            }
        }
        return(
            <div class="flex flex-wrap">
                {a}
            </div>
        )
    }
}

export default Results