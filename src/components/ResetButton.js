import React from 'react';

function ResetButton(props) {

    return (
        <div class="m-3">
            <button onClick={props.resetUserKeys} class="text-white  p-1 border-solid border-gray-600 border-4">RESET</button>
        </div>
    );
  }

export default ResetButton;
