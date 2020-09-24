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
            userIn: null,
            scales: scales,
        }
        this.handleClick = this.handleClick.bind(this)
        this.matchKeys = this.matchKeys.bind(this)
    }

    render(){
        return (
            <div>
                <NoteInput  userKeys={this.state.userKeys}/>
                <div class="flex justify-center bg-gray-200 p-5">                    
                    {this.renderButtons()}
                </div>
                <Results scaleMatches={this.state.scales} />
            </div>
        )
    }

    handleClick(name){

        this.setState({userKeys: [...this.state.userKeys, <div>{name}</div>]});
        
        this.matchKeys(name);
        
        this.setState({userIn: name});

    }

    matchKeys(userIn){

        var s = this.state.scales;

        for(var key in s){

            for(var type in s[key]){

                if(!s[key][type].includes(userIn)){

                    delete s[key][type];

                    if(Object.keys(s[key]).length === 0){

                        delete s[key];

                    }
                }
            }
        }   

        this.setState({scales: s});
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
                myClass = "text-white bg-black p-3 border-solid border-gray-600 border-2";
            }
            else
            {
                myClass = "text-black bg-white p-3 border-solid border-gray-600 border-2";
            }
    
            buttons[i]= this.assignButtons(key[i], myClass)
        }
    
        return buttons;
    }
    
}

export default UserPanel;