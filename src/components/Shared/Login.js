import React from "react";
import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri } from './settings';
import Spinner from '../Shared/Spinner';
import '../styles/login.css';

class Login extends React.Component {
    state = { token: null, errorMessage: "", isLoading: false };

    onSuccess = (response) => {
        console.log(response);
        this.setState({ isLoading: false });
        this.setState({ token: response.access_token });
        // Redirect user to search route
    };

    onFailure = (response) => {
        console.log(response);
        this.setState({ isLoading: false });
        // this.setState({ errorMessage: "" }); Sign in
        // notifaction of error response 
    };

    Clicked = () => this.setState({ isLoading: true });

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        // if login succeds navigate to search /artist
        // if err show err toaster 
        if (this.state.isLoading) return <Spinner message="Please login to your spotify account" />;
        return (
            <div className="login">
                <div className="col-sm-4 ">
                    <SpotifyLogin
                        clientId={clientId}
                        redirectUri={redirectUri}
                        onRequest={this.Clicked}
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