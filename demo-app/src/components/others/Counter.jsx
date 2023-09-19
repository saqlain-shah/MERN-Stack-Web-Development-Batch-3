import React, {useState} from 'react'

export default function Counter() {
    const [Value,setValue] = useState(0)



    function increament() {
    setValue(Value + 1)    
    }
    function decreament() {
        setValue(Value - 1)
        
        if (Value < 1) {
            setValue(Value + 0)
            
        }

    }
    return (
        <>
        <h1>COUNTERS</h1>
        <button onClick={increament}>increament</button>
        {Value}
        <button onClick={decreament}>decreament</button>
        </>
  
  )
}
