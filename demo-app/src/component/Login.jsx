// SignIn.js
import React, { useState } from 'react';

function SignIn() {
    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    });

    const handleSignIn = () => {
        console.log('Sign-In Data:', signInData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignInData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signInData.email}
                    onChange={handleInputChange}
                    
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signInData.password}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleSignIn}>
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
