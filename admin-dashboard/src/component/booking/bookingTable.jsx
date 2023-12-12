import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function BookingList() {
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const apiUrl = 'http://localhost:8000/api/users/';

    useEffect(() => {
        getUsers();
        console.log("welcome");
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get(apiUrl, { withCredentials: true })
                // setUserList(users.data.data)
                .then((users) => {
                    setUserList(users.data.data);
                    console.log(users.data.data)
                })
                .then(() => {
                    setLoading(false);

                })


        } catch (error) {
            console.log(error);
        }
    }

    let handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete the data?");
            if (confirmDelete) {
                await axios.delete(`${apiUrl}:${id}`);
                getUsers();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getRowId = (row) => row._id;

    const columns = [
        // { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'HotelId', headerName: 'Hotel-ID', flex: 1 },
        { field: 'roomId', headerName: 'Room-ID', flex: 1 },
        { field: 'toDate', headerName: 'To-Date', flex: 1 },
        { field: 'fromDate', headerName: 'From-Date', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <div>
                    <Link to={`/booking-view/${params.row._id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                    <Link to={`/booking-edit/${params.row._id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                    <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                </div>
            ),
        },
    ];
const rows= [
    {id: 1, HotelId: "Hotel_A", roomId:'room1', toDate:'12-05-2023', fromDate:'12-15-2023', _id:'booking_1'},
    {id: 1, HotelId: "Hotel_B", roomId:'romm2', toDate:'12-05-2023', fromDate:'12-15-2023', _id:'booking_2'},
];
    return (
        <>
            <h4>Booking List </h4>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Booking-List</h1>
                <Link to="/booking-create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <FontAwesomeIcon icon={faBook} className="creatinguser mr-2" />
                    Create Booking
                </Link>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid

                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    // loading={isLoading}
                    getRowId={getRowId}
                />
            </div>
        </>
    );
}

export default BookingList;
