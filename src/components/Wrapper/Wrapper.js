import React, { useState } from 'react';
import './Wrapper.css';
import LogInForm from '../LogInForm/LogInForm';
import SignInForm from '../SignInForm/SignInForm';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Wrapper = () => {
    const [page, setPage] = useState('login');

    const handleChangePage = () => setPage(
        (page==='login'?'register':'login')
    );

    return ( 
        <Router>
        <div className="wrapper">
        <Route path = "/" exact component={LogInForm.bind(this, handleChangePage)}/>
        <Route path = "/login" exact component={LogInForm.bind(this, handleChangePage)}/>
        <Route path = "/register" exact component={SignInForm.bind(this, handleChangePage)}/>
        </div>
        </Router>
     );
}
 
export default Wrapper;