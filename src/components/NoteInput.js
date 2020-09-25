import React from 'react';

class NoteInput extends React.Component{

    render() {
        return(            
            <div id="keyboard" class="px-5 text-lg flex flex-wrap bg-green-400 text-green-100">
                {this.props.userKeys}
            </div>
        )
    }
}

export default NoteInput;
