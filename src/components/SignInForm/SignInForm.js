import './SignInForm.css';
import React from 'react';
import {Link} from 'react-router-dom';

const SignInForm = (handleChangePage) => {
    return ( 
        <React.Fragment>
        <form>
        <input placeholder = " New User Name" className="user-name-input"></input>
        <input placeholder = "New Password" className="password-input"></input>
        </form>
        <Link to="/login" onClick={handleChangePage}>Masz już konto? Zaloguj się!</Link>
        </React.Fragment>
     );
}
 
export default SignInForm;