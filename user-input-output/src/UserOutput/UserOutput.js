import React from 'react';

// STATELESS component
const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>{ props.username }</p>
            <p>{ props.othertext }</p>
        </div>
    )
}

export default userOutput;