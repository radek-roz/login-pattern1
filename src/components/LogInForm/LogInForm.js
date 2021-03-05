import './LogInForm.css';
import Logo from '../Logo/Logo';
import React from 'react';
import {Link} from 'react-router-dom';

const LogInForm = (handleChangePage) => {
    return ( 
        <React.Fragment>
            <Logo/>
        <form>
        <input placeholder = "User Name" className="user-name-input"></input>
        <input placeholder = "Password" className="password-input"></input>
        <input type="submit" value="Log in"></input>
        </form>
        <Link to="/register" onClick={handleChangePage}>Dołącz do nas!</Link>
        </React.Fragment>
     );
}
 
export default LogInForm;