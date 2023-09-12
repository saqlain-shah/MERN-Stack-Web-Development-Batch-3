import React, { useState } from 'react'

 function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

    console.log('User Data:', firstName);
    console.log('User Data:', lastName);
    console.log('User Data:', email);
    console.log('User Data:', password);
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form >
        <input
        type="firstName"
        name="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} 
        />
        <input
        type="lastname"
        name="lastname"
        value={lastName}
        onChange={(e) => setLasttName(e.target.value)} 
        />
        <input
        type="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />
        <input
        type="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}    
        />
        <button type= "button" onClick={handleSignUp}>
          Sign Up
        </button>
        </form>
    </div>
  )
}
export default SignUp;
