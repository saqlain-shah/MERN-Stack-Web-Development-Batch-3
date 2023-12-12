import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function HotelEdit() {
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
            name: "",
       types: "",
       city: "",
     address: "",
     distance: "",
     photos: "",
     title: "",
    desc: "",
    rating: "",
    cheapestPrice: "",
    featured: ""
        },
        // Validating Forms while entering the data
        validate: (values) => {
            let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

            if (!values.name) {
                errors.name = "Please enter name";
              } else if (values.name.length < 5) {
                errors.name = "Name shouldn't be less than 5 letters";
              } else if (values.name.length > 20) {
                errors.name = "Name shouldn't be more than 20 letters";
              }
      
              if (!values.types) {
                errors.types= "Please enter Hotel Type";
              } else if (values.types.length < 5) {
                errors.types = "Name shouldn't be less than 5 letters";
              } else if (values.types.length > 20) {
                errors.types = "Name shouldn't be more than 20 letters";
              }
      
              if (!values.city) {
                errors.city = "Please select any one city";
              }
      
              if (!values.address) {
                errors.address = "Please Enter Address";
              }
      
              if (!values.distance) {
                errors.distance = "Please enter distance";
              }
      
              if (!values.photos) {
                errors.photos = "Please Sumit Picture";
              }
      
              if (!values.title) {
                errors.title = "Please enter Title";
              }
      
              if (!values.desc) {
                errors.desc = "Please write a description";
              }
      
              if (!values.rating) {
                errors.rating = "Please give a rating";
              }
      
              if (!values.cheapestPrice) {
                errors.cheapestPrice = "Price is 5000";
              }
      
              if (!values.featured) {
                errors.featured = "ture ";
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
            <h4>Modify Hotel</h4>
            <h3>Modify-Hotel - Id : {params.id} </h3>
            <div className='container'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className="col-lg-6">
                        <label>Name</label>
            <input name='name' value={myFormik.values.name} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.name ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.name}</span>
          </div>

          <div className="col-lg-6">
          <label>Type</label>
          <input name='types' value={myFormik.values.types} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.types ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.types}</span>
          </div>

          <div className='col-lg-6'>
            <label>City</label>
            <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.city ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="CN">Skardu</option>
              <option value="KN">Karachi</option>
              <option value="MU">Lahore</option>
              <option value="SA">Islamabad</option>
              <option value="MI">Gilgit</option>
              <option value="VB">Quatta</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>

          <div className="col-lg-6">
          <label>Address</label>
          <input name='address' value={myFormik.values.address} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.address ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.address}</span>
          </div>

          <div className="col-lg-6">
          <label>Distance</label>
          <input name='distance' value={myFormik.values.distance} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.distance ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.distance}</span>
          </div>

          <div className="col-lg-6">
          <label>Hotel Picture</label>
          <input name='photos' value={myFormik.values.photos} onChange={myFormik.handleChange} type={"file"}
              className={`form-control ${myFormik.errors.photos ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.photos}</span>
          </div>

          <div className="col-lg-6">
          <label>Title</label>
          <input name='title' value={myFormik.values.title} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.title ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.title}</span>
          </div>

          <div className="col-lg-6">
          <label>Description</label>
          <input name='desc' value={myFormik.values.desc} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.desc ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.desc}</span>
          </div>

          <div className="col-lg-6">
          <label>Rating</label>
          <input name='rating' value={myFormik.values.rating} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.rating ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.rating}</span>
          </div>

          <div className='col-lg-6'>
            <label>CheapestPrice</label>
            <select name='cheapestPrice' value={myFormik.values.cheapestPrice} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.cheapestPrice ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="Cp">5000</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.cheapestPrice}</span>
          </div>

          <div className='col-lg-6'>
            <label>Featured</label>
            <select name='featured' value={myFormik.values.featured} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.featured ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="tu">ture</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.featured}</span>
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

export default HotelEdit
