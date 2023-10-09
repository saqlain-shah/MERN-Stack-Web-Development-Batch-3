import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { UserDataContext } from '../../../index';

const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'dob', headerName: 'Date of Birth', flex: 1 },
    { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
];

const UserTable = () => {
    const userData = useContext(UserDataContext);


    console.log("userData in the table component", userData)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Data Table</h1>
            <DataGrid
                rows={userData}
                columns={columns}
                pageSize={5}
                checkboxSelection
                dataKey="id"
            />
        </div>
    );
};

export default UserTable;
