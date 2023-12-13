import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

function HotelList() {
  const [hotelList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiUrl = "http://localhost:5000/api/hotel";

  useEffect(() => {
    getUsers();

  }, []);

  let getUsers = async () => {
    try {
      await axios
        .get(apiUrl, { withCredentials: true })
        // setUserList(users.data.data)
        .then((hotelList) => {
          setUserList(hotelList.data);
          console.log(hotelList.data);
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
          rows={hotelList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId}
        />
      </div>
    </>
  );
}

export default HotelList;
