import React from 'react';

function KeyButton(props) {

    return (
        <div>
            <button onClick={props.onClick} class={props.class}>{props.value}</button>
        </div>
    );
  }

export default KeyButton;
