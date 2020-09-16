import React, {Component} from 'react';
import {scaleData} from '../data/scaleData';

class Scales extends Component {
    constructor(props){
        super(props);
        this.findMatches = this.findMatches.bind(this);
    }

    findMatches(){
        Object.entries(scaleData).forEach(([key,val]) => {
            // console.log(`${key} : ${val}`);/
            Object.entries(val).forEach(([key1,val1]) => {
                console.log(`${key1} : ${val1}`);
                console.log(val1.includes("A"));
            })
        })

    }

    render(){
        return(
            <button onClick={this.findMatches}>find the matches</button>
        );
    }
}

export default Scales;