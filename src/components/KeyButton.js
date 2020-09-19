import React from 'react';

function KeyButton(props) {

    return (
        <div>
            <button onClick={props.onClick}>{props.value}</button>
        </div>
    );
  }

export default KeyButton;
