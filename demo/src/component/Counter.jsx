import React ,{useState} from "react";

export default function Counter() {
  const [value , setValue] = useState(0);

  function handleIncrement(){
    setValue(value + 1)
  }
  function handleDecrement(){
    setValue(value - 1)
  }
    return (
    <React.Fragment>
        <h1>Counter</h1>
        <buttom onClick = {handleIncrement}>INcrement</buttom>
        {value}
        <buttom onClick = {handleDecrement}>Decrement</buttom>
    </React.Fragment>
  )
}
