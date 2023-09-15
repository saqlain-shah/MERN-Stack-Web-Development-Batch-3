import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const message = "Hello from ParentComponent!";

    return (
        <div>
            <h1>Parent Component</h1>
          
            <ChildComponent message={message} />
        </div>
            );
}

export default ParentComponent;
