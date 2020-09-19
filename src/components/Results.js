import React, { Component } from 'react';

class Results extends Component {
    render(){
        return(
            <div class="container-md">
                {this.props.userKeys}
            </div>
        )
    }
}

export default Results