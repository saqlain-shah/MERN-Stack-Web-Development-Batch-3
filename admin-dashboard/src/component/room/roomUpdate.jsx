import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function RoomEdit() {
    const params = useParams();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();


    let getUserData = async () => {
        try {
            const user = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
            myFormik.setValues(user.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserData()
    }, [])

    const myFormik = useFormik({
        initialValues: {
            title: "",
            price: "",
           maxPeople: "",
           desc: ""
        },
        // Validating Forms while entering the data
        validate: (values) => {
            let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

            if (!values.title) {
                errors.title = "Please enter username";
            } else if (values.title.length < 5) {
                errors.title = "Name shouldn't be less than 5 letters";
            } else if (values.title.length > 20) {
                errors.title= "Name shouldn't be more than 20 letters";
            }

            if (!values.price) {
                errors.price = "Please enter price";
            } 

            if (!values.maxPeople) {
                errors.maxPeople = "Please select any one";
            }

            if (!values.desc) {
                errors.desc = "Please write a Description about room";
            }

            return errors;
        },

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`, values);
                setLoading(false);
                navigate("/portal/user-list")
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    })
    return (
        <>
            <h4>Modify Room</h4>

            <h3>Modify-Room - Id : {params.id} </h3>
            <div className='container'>
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

                    <div className='col-lg-6'>
                        <label>MaxPeople</label>
                        <select name='maxPeople' value={myFormik.values.maxPeople} onChange={myFormik.handleChange}
                            className={`form-control ${myFormik.errors.maxPeople ? "is-invalid" : ""} `} >
                            <option value="">----Select----</option>
                            <option value="C">2</option>
                            <option value="K">3</option>
                            <option value="M">4</option>
                            <option value="S">5</option>
                        </select>
                        <span style={{ color: "red" }}>{myFormik.errors.city}</span>
                    </div>


                    <div className="col-lg-6">
                        <label>Description</label>
                        <input name='desc' value={myFormik.values.desc} onChange={myFormik.handleChange} type={"text"}
                            className={`form-control ${myFormik.errors.desc ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.desc}</span>
                    </div>

                        <div className='col-lg-12 mt-3'>
                            <input disabled={isLoading} type="submit" value={isLoading ? "Updating..." : "Update"} className=' btn btn-primary' />
                        </div>
                    </div>
                </form>
                {/* {JSON.stringify(myFormik.values)} */}
            </div>
        </>


    )
}

export default RoomEdit
