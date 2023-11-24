import React, { useState } from 'react';

export default function Form() {
    const [data, setData] = useState({
        username: '123',
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

    function handleSubmit() {
        alert(`Hello ${data.username} your email is ${data.email} and your password is ${data.password}`);
    }

    return (
        <React.Fragment>
            <div className='body'> 
            <label>User Name:</label><br />
            <input
                type="text"
                name="username"
                value={data.name}
                onChange={handleChange}
            /><br />
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

            <button onClick={handleSubmit}>Display Data</button>
            </div>
        </React.Fragment>
    );
}
