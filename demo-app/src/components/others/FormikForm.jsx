import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const MyForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{ color: 'red', marginTop: '5px' }}>
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div style={{ color: 'red', marginTop: '5px' }}>
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red', marginTop: '5px' }}>
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
