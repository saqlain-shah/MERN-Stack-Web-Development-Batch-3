import React, {useState} from 'react'


function Counter() {

  const [value, setValue] = useState(0)
    function handleIncrement() {
        setValue(value+1)
    }

    function handleDecrement() {
        
        
          if (value >= 1) {
            setValue(value-1)
          }
          
        
      
    }



  return (
    <React.Fragment>
        <h1>Counter</h1>
        <button onClick={handleIncrement}>Increament</button>
        {value}
        <button onClick={handleDecrement}>Decrement</button>
    </React.Fragment>
  )
}

export default Counter