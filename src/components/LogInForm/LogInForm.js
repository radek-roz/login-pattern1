import './LogInForm.css';
import React from 'react';
import {Link} from 'react-router-dom';

const LogInForm = () => {
    return ( 
        <React.Fragment>
        <form>
        <input placeholder = "User Name" className="user-name-input"></input>
        <input placeholder = "Password" className="password-input"></input>
        </form>
        <Link to="/register">Dołącz do nas!</Link>
        </React.Fragment>
     );
}
 
export default LogInForm;