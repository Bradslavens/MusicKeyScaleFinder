import React from 'react';

function KeyButton(props) {

    return (
        <div class="mx-1">
            <button onClick={props.onClick} class={props.class}>{props.value}</button>
        </div>
    );
  }

export default KeyButton;
