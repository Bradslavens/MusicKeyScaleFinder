import React from 'react';

function NoteInput(){

    return(
        <div class="container-md">
            <Buttons />
        </div>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function Buttons() {
        
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

        buttons[i] = <button type="button" class={myClass}>{key[i]}</button>

    }

    return buttons;
}

export default NoteInput;
