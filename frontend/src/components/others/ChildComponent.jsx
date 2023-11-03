import React from 'react';

function ChildComponent(prop) {

    return (
        <div>
            <h2>Child Component</h2>
            <p>{prop.message}</p>
        </div>
    );
}

export default ChildComponent;
