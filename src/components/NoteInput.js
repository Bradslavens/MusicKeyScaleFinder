import React, { Component } from 'react'

class NoteInput extends Component {
    render(){
        return(
            <div>
                <form>
                        <select  >
                            <option value="1">A</option>
                            <option value="1">A&#9839;/B&#9837;</option>
                            <option value="2">B</option>
                            <option value="3">C</option>
                            <option value="1">C&#9839;/D&#9837;</option>
                            <option value="1">D</option>
                            <option value="1">D&#9839;/E&#9837;</option>
                            <option value="2">E</option>
                            <option value="3">F</option>
                            <option value="1">F&#9839;/G&#9837;</option>
                            <option value="3">G</option>
                            <option value="1">G&#9839;/A&#9837;</option>
                        </select>
                </form>
                <button>+ add a note</button>
            </div>
        )
    }
}

export default NoteInput

