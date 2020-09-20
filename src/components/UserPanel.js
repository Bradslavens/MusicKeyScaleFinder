import React from 'react';
import KeyButton from './KeyButton';
import NoteInput from './NoteInput'
import Results from './Results'

class UserPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userKeys: null,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({userKeys: "A"});
        console.log("handle clicked");
    }

    // buttons() {
        
    //     let key = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];    
        
    //     let buttons = {};
    //     let myClass;
    
    //     for(let i=0; i<key.length; i++){
    //         if(key[i].length > 1){
    //             myClass = "btn btn-dark mx-1";
    //         }
    //         else
    //         {
    //             myClass = "btn btn-light mx-1";
    //         }
    
    //         buttons[key[i]] = myClass;
    //     }
    
    //     return buttons;
    // }

    render(){
        return (
            <div class="container-md">
                <NoteInput  userKeys={this.state.userKeys}/>
                {renderButtons()}
                <Results />
            </div>
        )
    }
}

function renderButtons(){

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

        buttons[i]= assignButtons(key[i], myClass)
    }

    return buttons;
}

function assignButtons(keyName, divClass){
    console.log("assigning buttons");
    return(
        <KeyButton onClick={()=>handleClick(keyName)} value={keyName} class={divClass} />
    );
}

function handleClick(name){

    alert("hello " + name);

}

export default UserPanel;