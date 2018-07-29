import React from 'react';

// STATELESS component
const userInput = (props) => {
    return (
        <div className="userInput">
            <input type="text" onChange={ props.changed } value={ props.username } />
        </div>
    )
}

export default userInput;