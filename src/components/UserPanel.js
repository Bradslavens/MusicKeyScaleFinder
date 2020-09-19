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
                {renderButtons("Brad 1")}
            </div>
        )
    }
}

function renderButtons(){

    let arr = [];

    
    for(let i=0;i<5; i++){
        arr[i] = assignButtons(i);
    }

    return arr;
}

function assignButtons(name){
    return(
        <KeyButton onClick={()=>handleClick(name)} value={"number" + name} />
    );
}

function handleClick(name){

    alert("hello " + name);

}

export default UserPanel;