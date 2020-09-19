import React from 'react'

function Header(props){
    return(
        <div class="container-md">  
            <h1>Music Scale Finder App</h1>
            {props.value}
        </div>
    )
}

export default Header