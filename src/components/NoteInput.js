import React, { Component } from 'react'

class NoteInput extends Component {

    constructor(props){
        super(props)

        this.state = {
            notes: [],
        }

        this.addNotes = this.addNotes.bind(this)

    }

    addNotes(event){
        console.log("add note clicked ");
        this.setState(
            {
                notes: [...this.state.notes, <div>{event.target.value}</div>],
            }
        );
    }


    render(){
        return(
            <div>
                <form>
                        <select  onChange={this.addNotes} >
                            <option key="1" value="A">A</option>
                            <option key="2" value="A#Bb">A&#9839;/B&#9837;</option>
                            <option key="3" value="B">B</option>
                            <option value="C">C</option>
                            <option value="C#Db">C&#9839;/D&#9837;</option>
                            <option value="D">D</option>
                            <option value="D#Eb">D&#9839;/E&#9837;</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="F#Gb">F&#9839;/G&#9837;</option>
                            <option value="G">G</option>
                            <option value="G#Ab">G&#9839;/A&#9837;</option>
                        </select>
                </form>
                {/* <button onClick={this.addNotes}>+ add a note</button> */}
                <div>{this.state.notes}</div>
            </div>
        )
    }
}

export default NoteInput

