import './Wrapper.css';
import Logo from '../Logo/Logo';
import LogInForm from '../LogInForm/LogInForm';
import SignInForm from '../SignInForm/SignInForm';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Wrapper = () => {
    return ( 
        <Router>
        <div className="wrapper">
        <Logo/>
        <Route path = "/" exact component={LogInForm}/>
        <Route path = "/login" exact component={LogInForm}/>
        <Route path = "/register" exact component={SignInForm}/>
        </div>
        </Router>
     );
}
 
export default Wrapper;