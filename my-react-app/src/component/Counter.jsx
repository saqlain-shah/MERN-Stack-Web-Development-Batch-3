
import React, { useState }from "react";


export default function Counter(){
    const [value, setValue] = useState(0)

    function handleIncrement(){
    setValue(value+1)
    }
    function handleDecrement(){
        if (value > 0){
        setValue(value-1)
    }}
    return(
        <React.Fragment>
         <h1>Counter</h1>
       
        <button onClick={handleIncrement}>Increment</button>
        {value}
        <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    )

    };
