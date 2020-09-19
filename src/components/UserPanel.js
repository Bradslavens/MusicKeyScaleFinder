import React, { useImperativeHandle } from 'react';
import NoteInput from './NoteInput'
import Results from './Results'

class UserPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userKeys: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.buttons = this.buttons.bind(this);
    }

    handleClick(){
        this.setState({userKeys: "A"});
        console.log("handle clicked");
    }

    buttons() {
        
        let key = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];    
        
        let buttons = [];
        let myClass;
    
        for(let i=0; i<key.length; i++){
            if(key[i].length > 1){
                myClass = "btn btn-dark mx-1";
            }
            else
            {
                myClass = "btn btn-light mx-1";
            }
    
            buttons[i] = <button 
                            // onClick
                            type="button" class={myClass}
                            value={key[i]}
                            >{key[i]}
                        </button>
        }
    
        return buttons;
    }
    


    render(){
        return (
            <div class="container-md">
                <Results  userKeys={this.state.userKeys}/>
                <NoteInput myButtons={() => this.buttons}/>
            </div>
        )
    }
}

export default UserPanel;