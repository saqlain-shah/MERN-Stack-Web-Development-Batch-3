import React, {useState} from 'react'
import '../App.css' 



export default function Login() {
 const [data,setData] = useState ({
    email:'abc@gmail.com',
    password:'sdjhuifhasdjk',
 })
 function handleChange(e)
{
    const{name,value}=e.target;
    setData((prevData)=>({
        ...prevData,
        [name] : value
    }))
  
}
function handleSubmit(){
    alert(`email = ${data.email} password = ${data.password}`)
}
    return (
    <><center>
    <div className="body">
    <label htmlFor="">Enter your email</label><br />
    <input 
    type="text"
    value={data.email}
    onChange={handleChange}
    name="email"
    id='email'
     />
     <br />
     <label htmlFor="">Password</label><br />
     <input 
     type="password" 
     name="password" 
     value={data.password}
     onChange={handleChange}
     id="password" /> <br />
     <button onClick={handleSubmit}>Login</button>
     <br />
     <button>already account</button>
     </div></center>
    </>
  )
}
