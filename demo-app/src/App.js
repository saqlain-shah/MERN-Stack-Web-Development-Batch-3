import React from 'react';
import './App.css';

import LoginForm from './components/login';
import SignUp from './SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Registration from './components/FormikAndYub/Formik';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* render the LoginForm for te root route */}
         {/* <Route path='/' element={<LoginForm />} />  */}
             {/* other route */}
          {/* <Route path='/login' element={<LoginForm />} /> */}
          {/* <Route path='/SignUp' element={<SignUp />} /> */}
        </Routes>
      </Router>
      <Registration/>
    </React.Fragment>
  );
}

export default App;