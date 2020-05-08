import React from "react";

import './login.css';


const Login = () => {
    return (
        <div>
            <div className="container"> 
               <button type="submit" id="login--btn"  
                className="btn btn-outline-dark btn-lg d-flex justify-content-center">
                Login 
                <img className="logo" src={require('../spotify.png')} />
               </button>
            </div>      
        </div>
    );
};
 
export default Login;