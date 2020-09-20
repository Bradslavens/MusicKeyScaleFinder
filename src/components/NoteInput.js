import React from 'react';

class NoteInput extends React.Component{

    render() {
        return(            
            <div class="container-md">
                {this.props.userKeys}
            </div>
        )
    }
}

export default NoteInput;
