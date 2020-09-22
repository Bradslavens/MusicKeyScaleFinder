import React from 'react';
import KeyButton from './KeyButton';
import NoteInput from './NoteInput'
import Results from './Results'
import scales from '../data/scaleData'

class UserPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userKeys: [],
            userKeysForCompare: [],
        }
        this.handleClick = this.handleClick.bind(this)
        this.matchKeys = this.matchKeys.bind(this)
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
        this.matchKeys([...this.state.userKeysForCompare, name]);
        
        this.setState({userKeysForCompare: [...this.state.userKeysForCompare, name]})

    }

    matchKeys(userKeysForCompare){

        const scaleKeys = scales;

        var matches = [];
        let m = 0;
        for(const keySc in scaleKeys){
            for(const scaleN in scaleKeys[keySc]){
                for(let j = 0; j<userKeysForCompare.length; j++){
                    // test if scale contains user key
                    if(scaleKeys[keySc][scaleN].includes(userKeysForCompare[j])){
                        console.log("add " + scaleKeys[keySc][scaleN]);
                        if(!matches.includes(scaleKeys[keySc][scaleN])){                    
                            matches.push(scaleKeys[keySc][scaleN]);
                        }
                    } else {
                        console.log("subtract" + m);
                        matches.slice(m,1);
                    }
                }

                m++;

            }
        }

        console.log(matches)

        // // go through each scale
        // for(let i = 0; i<scaleKeys.length; i++){
        //     // test go through userKeysForCompare
        //     for(let j = 0; j<userKeysForCompare.length; j++){
        //         // test if scale contains user key
        //         if(scaleKeys[i].includes(userKeysForCompare[j])){
        //             console.log("add " + i);
        //             if(!matches.includes(scaleKeys[i])){                    
        //                 matches.push(scales[i]);
        //             }
        //         } else {
        //             console.log("subtract" + i);
        //             matches.slice(i,1);
        //         }
        //     }
        // }

        // let m = 0;
        // for(const keySc in scaleKeys){

        //     for(let j = 0; j<userKeysForCompare.length; j++){
        //         // test if scale contains user key
        //         if(scaleKeys[keySc].includes(userKeysForCompare[j])){
        //             console.log("add " + keySc);
        //             if(!matches.includes(scaleKeys[keySc])){                    
        //                 matches.push(scales[keySc]);
        //             }
        //         } else {
        //             console.log("subtract" + m);
        //             matches.slice(m,1);
        //         }
        //     }

        //     m++;
        // }

        // console.log(matches)

    }

    assignButtons(keyName, divClass){
        return(
            <KeyButton onClick={() => this.handleClick(keyName)} value={keyName} class={divClass} />
        );
    }

    renderButtons(){

        let buttons = [];
            
        let key = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];    
            
        let myClass;
    
        for(let i=0; i<key.length; i++){
            
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