import React from "react";
import SpotifyLogin from 'react-spotify-login';

import './Home.css';

const clientId = '2f0ec6ba5043448889887a3610c8d542';
const redirectUri = 'http://localhost:3000/';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const Home = () => {
    return (
        <div>
            <div className="container">  
            <div className="row">
            <div className="col-sm-4 login--wrapper">
                
            <SpotifyLogin 
                 clientId={clientId}
                 redirectUri={redirectUri}
                 onSuccess={onSuccess}
                 onFailure={onFailure}
                 buttonText={"Login"}
                 className= {'btn btn-outline-dark btn-lg login--btn'}
                  />
                <img alt="spotify-logo " className="btn--logo" src={require('../spotify.png')} />  
                   
            </div>

            </div>     
            </div>      
        </div>
    );
};
 
export default Home;