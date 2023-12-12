import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

function HotelList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiUrl = "http://localhost:8000/api/users/";

  useEffect(() => {
    getUsers();
    console.log("welcome");
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios
        .get(apiUrl, { withCredentials: true })
        // setUserList(users.data.data)
        .then((users) => {
          setUserList(users.data.data);
          console.log(users.data.data);
        })
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete the data?"
      );
      if (confirmDelete) {
        await axios.delete(`${apiUrl}:${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getRowId = (row) => row._id;

  const columns = [
    // { field: 'id', headerName: 'ID', flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "distance", headerName: "Distance", flex: 1 },
    { field: "photos", headerName: "Photos", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "desc", headerName: "Description", flex: 1 },
    { field: "rooms", headerName: "Rooms", flex: 1 },
    { field: "rating", headerName: "Rating", flex: 1 },
    { field: "cheapestPrice", headerName: "CheapestPrice", flex: 1 },
    { field: "featured", headerName: "Features", flex: 1 },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div>
          <Link
            to={`/hotel-view/${params.row._id}`}
            className="btn btn-primary btn-sm mr-1"
          >
            View
          </Link>
          <Link
            to={`/hotel-edit/${params.row._id}`}
            className="btn btn-info btn-sm mr-1"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(params.row._id)}
            className="btn btn-danger btn-sm mr-1"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Hotel A",
      type: "Luxury",
      city: "Skardu",
      address: "Skardu main city",
      distance: 5,
      photos: "hotelA.jpg",
      title: "Hotel A Title",
      desc: "Luxury hotel with great amenities",
      rooms: 50,
      rating: 4.5,
      cheapestPrice: 150,
      featured: "",
      _id: 'Hotel_A'
    },
    {
      id: 2,
      name: "Hotel B",
      type: "Budget",
      city: "Kachura",
      address: "Lower kachura",
      distance: 10,
      photos: "hotelB.jpg",
      title: "Hotel B Title",
      desc: "Budget-friendly hotel for travelers",
      rooms: 30,
      rating: 3.8,
      cheapestPrice: 80,
      _id: 'Hotel B_id'
    },
    {
      id: 3,
      name: "Hotel C",
      type: "Resort",
      city: "Shigar",
      address: "Shigar fort",
      distance: 15,
      photos: "hotelC.jpg",
      title: "Hotel C Title",
      desc: "Resort with a scenic view near Shigar fort",
      rooms: 40,
      rating: 4.2,
      cheapestPrice: 120,
      _id: 'Hotel C_id'
    },
    {
      id: 4,
      name: "Hotel D",
      type: "Guesthouse",
      city: "Deosai",
      address: "Deosai plain",
      distance: 20,
      photos: "hotelD.jpg",
      title: "Hotel D Title",
      desc: "Guesthouse in the beautiful Deosai plain",
      rooms: 25,
      rating: 4.0,
      cheapestPrice: 100,
      _id: 'Hotel D_id'
    },
  ];

  return (
    <>
      <h4>Hotel List </h4>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Hotel-List</h1>
        <Link
          to="/hotel-create"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faHotel} className="creatinguser mr-2" />
          Create Hotel
        </Link>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
        //   loading={isLoading}
          getRowId={getRowId}
        />
      </div>
    </>
  );
}

export default HotelList;
