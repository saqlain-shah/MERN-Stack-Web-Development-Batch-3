import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HotelEdit() {
  const params = useParams();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  let getUserData = async () => {
    try {
      const user = await axios.get(
        `https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`
      );
      myFormik.setValues(user.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const myFormik = useFormik({
    initialValues: {
      name: "",
      type: "",
      city: "",
      address: "",
      distance: "",
      photos: "",
      title: "",
      desc: "",
      rooms: "",
      rating: "",
      cheapestPrice: "",
      featured: "",
    },
    // Validating Forms while entering the data
    validate: (values) => {
      let errors = {}; //Validating the form once the error returns empty else onsubmit won't work

      if (!values.name) {
        errors.name = "Please enter hotel name";
      } else if (values.name.length < 5) {
        errors.name = "Name shouldn't be less than 3 letters";
      } else if (values.name.length > 20) {
        errors.name = "Name shouldn't be more than 20 letters";
      }

      if (!values.type) {
        errors.type = "Please enter email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.type)
      ) {
        errors.type = "Invalid email address";
      }

      if (!values.city) {
        errors.city = "Please select any one city";
      }

      if (!values.address) {
        errors.address = "Please select any one address";
      }

      if (!values.distance) {
        errors.distance = "Please enter approximate distance";
      }
      if (!values.photos) {
        errors.photos = "Please select photos. Max file range is 2MB";
      }
      if (!values.title) {
        errors.title = "Please enter a title";
      }
      if (!values.desc) {
        errors.desc = "Please enter short description";
      }

      if (!values.rooms) {
        errors.rooms = "Please enter rooms";
      }
      if (!values.rating) {
        errors.rating = "Please enter rating";
      }
      if (!values.cheapestPrice) {
        errors.cheapestPrice = "Please enter the price";
      }
      if (!values.featured) {
        errors.featured = "Please enter features";
      }
      return errors;
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(
          `https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`,
          values
        );
        setLoading(false);
        navigate("/portal/user-list");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
  return (
    <>
      <h4>Modify Hotel</h4>
      <h3>HotelEdit - Id : {params.id} </h3>
      <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Name</label>
              <input
                name="username"
                value={myFormik.values.name}
                onChange={myFormik.handleChange}
                type={"text"}
                className={`form-control ${
                  myFormik.errors.name ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.name}</span>
            </div>

            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Type</label>
              <input
                name="city"
                value={myFormik.values.type}
                onChange={myFormik.handleChange}
                type={"string"}
                className={`form-control ${
                  myFormik.errors.type ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.type}</span>
            </div>

            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>City</label>
              <select
                name="city"
                value={myFormik.values.city}
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.city ? "is-invalid" : ""
                } `}
              >
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

            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Address</label>
              <select
                name="state"
                value={myFormik.values.address}
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.address ? "is-invalid" : ""
                } `}
              >
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

            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Distance</label>
              <input
                name="distance"
                value={myFormik.values.distance}
                onChange={myFormik.handleChange}
                type={"number"}
                className={`form-control ${
                  myFormik.errors.distance ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.distance}</span>
            </div>
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Photos</label>
              <input
                name="distance"
                value={myFormik.values.photos}
                onChange={myFormik.handleChange}
                type={"file"}
                className={`form-control ${
                  myFormik.errors.photos ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.photos}</span>
            </div>
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Title</label>
              <input
                name="distance"
                value={myFormik.values.title}
                onChange={myFormik.handleChange}
                type={"string"}
                className={`form-control ${
                  myFormik.errors.title ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.title}</span>
            </div>
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Description</label>
              <input
                name="distance"
                value={myFormik.values.desc}
                onChange={myFormik.handleChange}
                type={"string"}
                className={`form-control ${
                  myFormik.errors.desc ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.desc}</span>
            </div>
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Rooms</label>
              <input
                name="distance"
                value={myFormik.values.rooms}
                onChange={myFormik.handleChange}
                type={"string"}
                className={`form-control ${
                  myFormik.errors.rooms ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.rooms}</span>
            </div>
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Rating</label>
              <input
                name="distance"
                value={myFormik.values.rating}
                onChange={myFormik.handleChange}
                type={"number"}
                className={`form-control ${
                  myFormik.errors.rating ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.rating}</span>
            </div>
            <div className="col-lg-6" style={{ marginBottom: "15px" }}>
              <label>Cheapest Price</label>
              <input
                name="distance"
                value={myFormik.values.cheapestPrice}
                onChange={myFormik.handleChange}
                type={"number"}
                className={`form-control ${
                  myFormik.errors.cheapestPrice ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>
                {myFormik.errors.cheapestPrice}
              </span>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <input
              disabled={isLoading}
              type="submit"
              value={isLoading ? "Updating..." : "Update Now"}
              className=" btn btn-primary"
            />
          </div>
        </form>
        {/* {JSON.stringify(myFormik.values)} */}
      </div>
    </>
  );
}

export default HotelEdit;
