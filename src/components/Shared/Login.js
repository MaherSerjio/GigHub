import React from "react";
import SpotifyLogin from 'react-spotify-login';
import '../styles/login.css';

const clientId = '2f0ec6ba5043448889887a3610c8d542';
const redirectUri = 'http://localhost:3000/';

class Login extends React.Component {
    state = { token: null, errorMessage: "" };

    onSuccess = (response) => {
        console.log(response)
        this.setState({ token: response.access_token });
        // Redirect user to search route
    };

    onFailure = (response) => {
        console.log(response)
        // this.setState({ errorMessage: "" }); Sign in
        // notifaction of error response 
    };

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="login">
                <div className="col-sm-4 ">
                    <SpotifyLogin
                        clientId={clientId}
                        redirectUri={redirectUri}
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        buttonText={"Login"}
                        className={'btn btn-outline-dark btn-lg login--btn'}
                    />
                    <img alt="spotify-logo " className="btn--logo" src={require('../../spotify.png')} />
                </div>
            </div>
        );
    };
}

export default Login;