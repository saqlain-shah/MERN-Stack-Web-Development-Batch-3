
import React, { useState } from 'react';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
