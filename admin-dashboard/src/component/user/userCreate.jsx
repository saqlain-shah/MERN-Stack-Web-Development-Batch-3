import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCreate() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const myFormik = useFormik(
        {
            initialValues: {
                username: "",
                email: "",
                password:""
            },
            // Validating Forms while entering the data
            validate: (values) => {
                let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

                if (!values.username) {
                    errors.username = "Please enter username";
                } else if (values.username.length < 5) {
                    errors.username = "Name shouldn't be less than 3 letters";
                } else if (values.username.length > 20) {
                    errors.username = "Name shouldn't be more than 20 letters";
                }

                if (!values.email) {
                    errors.email = "Please enter email";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = "Please enter a password (at least 8 characters)";
                  } else if (values.password.length < 8) {
                    errors.password = "Password must be at least 8 characters";
                  } else if (!/[A-Z]/.test(values.password)) {
                    errors.password = "Password must contain at least one uppercase letter";
                  } else if (!/\d/.test(values.password)) {
                    errors.password = "Password must contain at least one number";
                  } else if (!/[!@#$%^&*()-_=+{};:,<.>]/.test(values.password)) {
                    errors.password = "Password must contain at least one symbol";
                  }
                return errors;
            },
            //one can be able to submit once the validates returns empty value (validation successful) else can't be submitted
            onSubmit: async (values) => {
                try {
                    setLoading(true);
                    await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/users", values);
                    navigate("/portal/user-list");
                } catch (error) {
                    console.log(error);
                    alert("Validation failed");
                    setLoading(false);
                }

                console.log(values);
            }

        });
    return (
        <div className='container'>
            <h4>Create User </h4>

            <form onSubmit={myFormik.handleSubmit}>
                <div className='row'>
                    <div className="col-lg-6">
                        <label>Username</label>
                        <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"}
                            className={`form-control ${myFormik.errors.username ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.username}</span>
                    </div>

                    <div className="col-lg-6">
                        <label>E-Mail</label>
                        <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"mail"}
                            className={`form-control ${myFormik.errors.email ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.email}</span>
                    </div>

                    <div className='col-lg-6'>
                        <label>Password</label>
                        <input name='password' value={myFormik.values.password} onChange={myFormik.handleChange} type={"string"}
                            className={`form-control ${myFormik.errors.password ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.password}</span>
                    </div>


                </div>
                    <div className='col-lg-6 mt-3'>
                        <input style={{width:'30%'}} disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create Now"} className=' btn btn-primary' />
                    </div>
            </form>
            {/* {JSON.stringify(myFormik.values)} */}
        </div>
    );
}

export default UserCreate
