import React, {useState} from 'react'
import '../App.css'
import Signup from './signup';
export default function Login() {

  const [data, setData] = useState({
    email: 'abc@gamil.com',
    password: '12345'
});

function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
        ...prevData,
        [name]: value
    }));
}
function handleSign(){
console.log('hi');

  <Signup/>
  

}
function handleSubmit() {
    alert(`your email is ${data.email} and your password is ${data.password}`);
}

  return (
  <React.Fragment>
<div className="body" align="center">
            <label>Email:</label><br />
            <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
            /><br />
            <label>Password:</label><br />
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            /><br />
<br /><br />
            <button onClick={handleSubmit}>Login</button>
 <button onClick={handleSign} >already account</button>
            </div>
  </React.Fragment>
  )
}
