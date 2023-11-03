// FormikForm.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Table from "./Table";
import initialValues from './initailValues';
import validationSchema from './Validation';
import App from "../../../App"

export let userData = [];
const FormikForm = () => {
    const fields = [
        { id: "id", label: "ID", type: "text" },
        { id: "firstName", label: "First Name", type: "text" },
        { id: "lastName", label: "Last Name", type: "text" },
        { id: "email", label: "Email", type: "email" },
        { id: "age", label: "Age", type: "number" },
        { id: "dob", label: "Date of Birth", type: "text" },
        { id: "contactNumber", label: "Contact Number", type: "text" },
    ];

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log("Form Component", values);
            userData = [...userData, values];

            <App value={userData} />
            console.log("data in the Array ", userData);
            navigate('/data-table');
        },
    });

    return (

        <Container maxWidth="sm">
            <Box mt={4}>
                <form onSubmit={formik.handleSubmit}>
                    {fields.map((field) => (
                        <TextField
                            key={field.id}
                            fullWidth
                            margin="normal"
                            id={field.id}
                            name={field.id}
                            label={field.label}
                            type={field.type}
                            value={formik.values[field.id]}
                            onChange={formik.handleChange}
                            error={formik.touched[field.id] && Boolean(formik.errors[field.id])}
                            helperText={formik.touched[field.id] && formik.errors[field.id]}
                        />
                    ))}
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
    );
};

export default FormikForm;
