import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RoomCreate() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const myFormik = useFormik(
        {
            initialValues: {
                title: "",
                price: "",
                maxPeople: "",
                desc: "",
            },
            // Validating Forms while entering the data
            validate: (values) => {
                let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

                if (!values.title) {
                    errors.title = "Please enter username";
                } else if (values.title.length < 5) {
                    errors.title = "Name shouldn't be less than 3 letters";
                } else if (values.title.length > 20) {
                    errors.title = "Name shouldn't be more than 20 letters";
                }

                if (!values.price) {
                    errors.price = "Please enter email";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.price)) {
                    errors.price = 'Invalid email address';
                }

                if (!values.maxPeople) {
                    errors.maxPeople = "Please select any one city";
                }

                if (!values.desc) {
                    errors.desc = "Please select any one state";
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
            <h4>Create Room</h4>

            <form onSubmit={myFormik.handleSubmit}>
                <div className='row'>
                    <div className="col-lg-6">
                        <label>Title</label>
                        <input name='title' value={myFormik.values.title} onChange={myFormik.handleChange} type={"text"}
                            className={`form-control ${myFormik.errors.title ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.title}</span>
                    </div>
                                                                        
                    <div className="col-lg-6">
                        <label>Price</label>
                        <input name='price' value={myFormik.values.price} onChange={myFormik.handleChange} type={"number"}
                            className={`form-control ${myFormik.errors.price ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.price}</span>
                    </div>

                    <div className='col-lg-4'>
                        <label>MaxPeople</label>
                        <input name='maxPeople' value={myFormik.values.maxPeople} onChange={myFormik.handleChange} type={"number"}
                            className={`form-control ${myFormik.errors.maxPeople ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.maxPeople}</span>
                    </div>

                    <div className='col-lg-4'>
                        <label>Description</label>
                        <input name='desc' value={myFormik.values.desc} onChange={myFormik.handleChange} type={"string"}
                            className={`form-control ${myFormik.errors.desc ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.desc}</span>
                    </div>

                </div>
                    <div className='col-lg-4 mt-3'>
                        <input style={{width:'30%'}} disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
                    </div>
            </form>
            {/* {JSON.stringify(myFormik.values)} */}
        </div>
    );
}

export default RoomCreate
