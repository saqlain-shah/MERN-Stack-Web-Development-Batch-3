import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function HotelList() {
    const [HotelList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

   // const apiUrl = 'http://localhost:8000/api/hotel/hotels';

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
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'photos', headerName: 'Photos', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'type', headerName: 'Type', flex: 1 },
        { field: 'city', headerName: 'City', flex: 1 },
       
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <div>
                    <Link to={`/hotel-view/:id${params.row._id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                    <Link to={`/hotel-edit/:id${params.row._id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                    <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                </div>
            ),
        },
    ];
  /* const rows = [
    {
        id: 1,
        name:"ssssss",
        type: "5 start",
       city:"skardu",
address: "dhfysjfgj",
distance:"3445",
photos:"efrefre",
title:"sdfgdtrg",
desc:"dsfrfgerg",
rating:"4.5",
rooms:"345",
cheapestPrice:"4000",
featured:"ture",
_id: "qwewr"
    }
    ]*/

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Hotel List</h1>
                <Link to="/hotel-create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
                    Create Hotel
                </Link>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid

                    rows={HotelList}
                    columns={columns}
                    pageSize={10}
                   //loading={isLoading}
                    getRowId={getRowId}
                />
            </div>
        </>
    );
}

export default HotelList;
