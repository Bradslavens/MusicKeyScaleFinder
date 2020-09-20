import React from 'react';
import KeyButton from './KeyButton';
import NoteInput from './NoteInput'
import Results from './Results'

class UserPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userKeys: [],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        return (
            <div class="container-md">
                <NoteInput  userKeys={this.state.userKeys}/>
                {this.renderButtons()}
                <Results />
            </div>
        )
    }

    handleClick(name){

        this.setState({userKeys: [...this.state.userKeys, <div>{name}</div>]});
        //
    
    }

    assignButtons(keyName, divClass){
        console.log("assigning buttons");
        return(
            <KeyButton onClick={()=>this.handleClick(keyName)} value={keyName} class={divClass} />
        );
    }

    renderButtons(){

        let buttons = [];
    
        console.log("rendering buttons");
            
        let key = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];    
            
        let myClass;
    
        for(let i=0; i<key.length; i++){
    
            console.log("assiging keys");
            
            if(key[i].length > 1){
                myClass = "btn btn-dark mx-1";
            }
            else
            {
                myClass = "btn btn-light mx-1";
            }
    
            buttons[i]= this.assignButtons(key[i], myClass)
        }
    
        return buttons;
    }
    
}


export default UserPanel;