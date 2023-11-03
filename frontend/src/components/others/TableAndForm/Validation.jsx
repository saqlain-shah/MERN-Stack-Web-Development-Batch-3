import * as yup from 'yup';



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



export default validationSchema;
