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

// function Buttons(f) {
        
//     let key = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];    
    
//     let buttons = [];
//     let myClass;

//     for(let i=0; i<key.length; i++){
//         if(key[i].length > 1){
//             myClass = "btn btn-dark mx-1";
//         }
//         else
//         {
//             myClass = "btn btn-light mx-1";
//         }

//         buttons[i] = <button 
//                         onClick={f}
//                         type="button" class={myClass}
//                         value={key[i]}
//                         >{key[i]}
//                     </button>
//     }

//     return buttons;
// }

export default NoteInput;
