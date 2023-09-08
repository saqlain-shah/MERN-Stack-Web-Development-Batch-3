import React, { useState } from 'react'

export default function Login() {
    const[value, setvalue]= useState({
        email: '',
        pasowrd:''
    })
    function userLoginData(data){
    const{name, value} =data.target;
    setvalue((prevData) => ({
        ...prevData,
        [name] :value
    }))
    
  }
  function userLoginsubmit(){
    alert(`your email is ${value.email} and password is ${value.password}`)
  }
  return (
    <div>
      <form className='loginForm'>
        <h2>Login form</h2>
        <label htmlFor="Userna me"></label>
        <input
        type="text"
        name="email"
        value={value.email}
        onChange={userLoginData}
        placeholder ="Enter user email" 
        />
        <label htmlFor="Username"></label>
        <input
        type="text"
        name="password"
        value={value.password}
        onChange={userLoginData}
        placeholder= "Enter user password"  
        />
        <button onClick={userLoginsubmit}>Login</button>
      </form>
    </div>
  )
}
