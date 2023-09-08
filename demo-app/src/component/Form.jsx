import React, { useState } from 'react';

export default function Form() {
    const [data, setData] = useState({
        username: '123',
        email: 'abc@gmail.com', // Corrected the email value
        password: '12345'
    //    adress: 'city a b c'
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        alert(`Hello ${data.username} your email is ${data.email} your password is ${data.password} and your adress ${data.adress}`);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label><br />
                <input
                    type="text"
                    name="username"
                    value={data.username} // Corrected the value prop
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
                <label>Address:</label><br />
                <input
                    type="adress"
                    name="adress"
                    value={data.adress}
                    onChange={handleChange}
                /><br />

                <button type="submit">Display Data</button>
            </form>
        </React.Fragment>
    );
}
