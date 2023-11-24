
import React, { useState , useEffect} from 'react'

export default function Counter() {
    const [value, setValue] = useState(0)

    function handleIncrement() {
        setValue(value + 1)
      
    }
    function handleDecrement() {
        setValue(value - 1)
    }
    useEffect(()=>{
        console.log("Value : ", value)
    }, [value])

    return (
        <React.Fragment>
            <h1>Counter</h1>
            <button onClick={handleIncrement}>Increament</button>
            {value}
            <button onClick={handleDecrement}>Decreament</button>

        </React.Fragment>

    );
}

