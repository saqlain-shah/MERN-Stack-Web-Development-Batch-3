import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HotelCreate() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const myFormik = useFormik(
        {
            initialValues: {
                name: "",
                type: "",
                city: "",
                address: "",
                distance: "",
                photos: "",
                title: "",
                desc: "",

                rating: "",
                cheapestPrice: "",

            },
            // Validating Forms while entering the data

            //one can be able to submit once the validates returns empty value (validation successful) else can't be submitted
            onSubmit: async (values) => {
                try {
                    setLoading(true);

                    // Create FormData for file upload
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('type', values.type);
                    formData.append('city', values.city);
                    formData.append('address', values.address);
                    formData.append('distance', values.distance);
                    formData.append('photo', values.photo);  // Append the photo field

                    formData.append('title', values.title);
                    formData.append('desc', values.desc);
                    formData.append('rating', values.rating);
                    formData.append('cheapestPrice', values.cheapestPrice);

                    // Make the axios request with the FormData and headers
                    await axios.post('http://localhost:5000/api/hotel/create', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',  // Set the content type for file upload
                        },
                    });

                    navigate('/hotel-list');
                } catch (error) {
                    console.error(error);
                    alert('Validation failed');
                } finally {
                    setLoading(false);
                }

                console.log(values);
            },
        });

    return (
        <div className='container'>
            <h4>Create Hotel</h4>
            <form onSubmit={myFormik.handleSubmit}>
                <div className='row'>
                    <div className="col-lg-6" style={{ marginBottom: "15px" }}>
                        <label>Name</label>
                        <input name='name' value={myFormik.values.name} onChange={myFormik.handleChange} type={"text"}
                            className={`form-control ${myFormik.errors.name ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.name}</span>
                    </div>

                    <div className="col-lg-6" style={{ marginBottom: "15px" }}>
                        <label>Type</label>
                        <input name='type' value={myFormik.values.type} onChange={myFormik.handleChange} type={"string"}
                            className={`form-control ${myFormik.errors.type ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.type}</span>
                    </div>

                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>City</label>
                        <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange}
                            className={`form-control ${myFormik.errors.city ? "is-invalid" : ""} `} >
                            <option value="">----Select----</option>
                            <option value="CN">Skardu</option>
                            <option value="KN">Kachura</option>
                            <option value="MU">Shigar</option>
                            <option value="SA">Deosai</option>
                            <option value="MI">Kharmang</option>
                            <option value="VB">Ghanche</option>
                        </select>
                        <span style={{ color: "red" }}>{myFormik.errors.city}</span>
                    </div>

                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Address</label>
                        <select name='address' value={myFormik.values.address} onChange={myFormik.handleChange}
                            className={`form-control ${myFormik.errors.address ? "is-invalid" : ""} `} >
                            <option value="">----Select----</option>
                            <option value="TN">Skardu main city</option>
                            <option value="KL">Lower kachura</option>
                            <option value="MH">Kharmang manthokha</option>
                            <option value="WA">Ghanche fort</option>
                            <option value="FL">Shigar fort</option>
                            <option value="VA">Deosai plain</option>
                        </select>
                        <span style={{ color: "red" }}>{myFormik.errors.state}</span>
                    </div>

                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Distance</label>
                        <input name='distance' value={myFormik.values.distance} onChange={myFormik.handleChange} type={"number"}
                            className={`form-control ${myFormik.errors.distance ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.distance}</span>
                    </div>
                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Photos</label>
                        <input name='photos' value={myFormik.values.photos} onChange={myFormik.handleChange} type={"file"}
                            className={`form-control ${myFormik.errors.photos ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.photos}</span>
                    </div>
                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Title</label>
                        <input name='title' value={myFormik.values.title} onChange={myFormik.handleChange} type={"string"}
                            className={`form-control ${myFormik.errors.title ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.title}</span>
                    </div>
                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Description</label>
                        <input name='desc' value={myFormik.values.desc} onChange={myFormik.handleChange} type={"string"}
                            className={`form-control ${myFormik.errors.desc ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.desc}</span>
                    </div>

                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Rating</label>
                        <input name='rating' value={myFormik.values.rating} onChange={myFormik.handleChange} type={"number"}
                            className={`form-control ${myFormik.errors.rating ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.rating}</span>
                    </div>
                    <div className='col-lg-6' style={{ marginBottom: "15px" }}>
                        <label>Cheapest Price</label>
                        <input name='cheapestPrice' value={myFormik.values.cheapestPrice} onChange={myFormik.handleChange} type={"number"}
                            className={`form-control ${myFormik.errors.cheapestPrice ? "is-invalid" : ""} `} />
                        <span style={{ color: "red" }}>{myFormik.errors.cheapestPrice}</span>
                    </div>

                </div>
                <div className='col-lg-4 mt-3'>
                    <input style={{ width: "30%" }} disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
                </div>
            </form>
            {/* {JSON.stringify(myFormik.values)} */}
        </div>
    );
}

export default HotelCreate
