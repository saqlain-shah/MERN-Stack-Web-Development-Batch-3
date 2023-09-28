// FormikForm.js
import React, { useState, createContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Table from "./Table";
import { useDataGridProps } from '@mui/x-data-grid/DataGrid/useDataGridProps';

const initialValues = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    dob: '',
    contactNumber: '',
};

const validationSchema = yup.object({
    id: yup.number("Only Number Allowed").required('ID is required'),
    firstName: yup.string("Only String Allowed").required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    age: yup
        .number()
        .typeError('Age must be a number')
        .positive('Age must be a positive number')
        .required('Age is required'),
    dob: yup.string().required('Date of Birth is required'),
    contactNumber: yup
        .number("phone number must be integer")
        .required('Contact Number is required'),
});

export const UserDataContext = createContext();

const FormikForm = () => {

    const [userData, setUserData] = useState([]);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log("Form Data", values);
            setUserData([...userData, values]);
        },
    });

    return (
    
        <UserDataContext.Provider value={userData}>
            <Container maxWidth="sm">
                <Box mt={4}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="id"
                            name="id"
                            label="ID"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                            error={formik.touched.id && Boolean(formik.errors.id)}
                            helperText={formik.touched.id && formik.errors.id}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="age"
                            name="age"
                            label="Age"
                            type="number"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            error={formik.touched.age && Boolean(formik.errors.age)}
                            helperText={formik.touched.age && formik.errors.age}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="dob"
                            name="dob"
                            label="Date of Birth"
                            value={formik.values.dob}
                            onChange={formik.handleChange}
                            error={formik.touched.dob && Boolean(formik.errors.dob)}
                            helperText={formik.touched.dob && formik.errors.dob}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="contactNumber"
                            name="contactNumber"
                            label="Contact Number"
                            value={formik.values.contactNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                            helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: '16px' }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Container >
                <Table />
     
        </UserDataContext.Provider>


              
    );
};

export default FormikForm;
