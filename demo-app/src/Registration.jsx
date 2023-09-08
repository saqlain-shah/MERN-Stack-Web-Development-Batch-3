import React from 'react'

export default function Registration() {
  return (
    <div>
        <label htmlFor="Username"></label>
        <input
        type="text"
        name="first name"
        value={value.firstname}
        onChange={userLoginData}
        placeholder= "Enter user password"  
        />
        <label htmlFor="Username"></label>
        <input
        type="text"
        name="lastname"
        value={value.lastname}
        onChange={userLoginData}
        placeholder= "Enter user password"  
        />
        <label htmlFor="Username"></label>
        <input
        type="text"
        name="email"
        value={value.email}
        onChange={userLoginData}
        placeholder= "Enter user password"  
        />
    </div>
  )
}
