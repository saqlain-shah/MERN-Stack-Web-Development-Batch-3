import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingEdit() {
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
      hotelId: "",
      roomId: "",
      toDate: "",
      fromDate: "",
    },
    // Validating Forms while entering the data
    validate: (values) => {
      let errors = {}; //Validating the form once the error returns empty else onsubmit won't work

      if (!values.hotelId) {
        errors.hotelId = "Please enter room ID";
      } else if (!/^[a-zA-Z0-9]+$/.test(values.hotelId)) {
        errors.hotelId =
          "Invalid Room ID. It should only contain letters and numbers.";
      }

      if (!values.roomId) {
        errors.roomId = "Please enter room ID";
      } else if (!/^[a-zA-Z0-9]+$/.test(values.roomId)) {
        errors.roomId =
          "Invalid Room ID. It should only contain letters and numbers.";
      }

      if (!values.toDate) {
        errors.toDate = "Please select Date you want to continue booking";
      }

      if (!values.fromDate) {
        errors.fromDate = "Please select date you want to checkout";
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
      <h4>Modify Booking</h4>
      <h3>BookingEdit - Id : {params.id} </h3>
      <div className="container" style={{marginTop:'20px'}}>
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label>Hotel ID *</label>
              <input
                name="hotelId"
                value={myFormik.values.hotelId}
                onChange={myFormik.handleChange}
                type={"string"}
                className={`form-control ${
                  myFormik.errors.hotelId ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.hotelId}</span>
            </div>

            <div className="col-lg-6">
              <label>Room ID *</label>
              <input
                name="roomId"
                value={myFormik.values.roomId}
                onChange={myFormik.handleChange}
                type={"string"}
                className={`form-control ${
                  myFormik.errors.roomId ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.roomId}</span>
            </div>

            <div className="col-lg-4">
              <label>To Date *</label>
              <input
                name="toDate"
                value={myFormik.values.toDate}
                onChange={myFormik.handleChange}
                type={"date"}
                className={`form-control ${
                  myFormik.errors.toDate ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.toDate}</span>
            </div>
            <div className="col-lg-4">
              <label>From Date *</label>
              <input
                name="fromDate"
                value={myFormik.values.fromDate}
                onChange={myFormik.handleChange}
                type={"date"}
                className={`form-control ${
                  myFormik.errors.fromDate ? "is-invalid" : ""
                } `}
              />
              <span style={{ color: "red" }}>{myFormik.errors.fromDate}</span>
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

export default BookingEdit;
