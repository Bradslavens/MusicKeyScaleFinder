import React from 'react';

class NoteInput extends React.Component{

    render() {
        return(            
            <div>
                {this.props.userKeys}
            </div>
        )
    }
}

export default NoteInput;
