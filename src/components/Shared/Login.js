import React from 'react';
import SpotifyLogin from 'react-spotify-login';
import history from '../../history';

import { clientId, redirectUri } from './settings';
import Spinner from './Spinner';
import Error from './Error'
import '../styles/login.css';


class Login extends React.Component {
    state = { errorMessage: null, isLoading: null };

    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

    Clicked = () => this.setState({ isLoading: true });

    onSuccess = (response) => {
        console.log(response);
        this.setState({ isLoading: false });
        localStorage.setItem("token", response.access_token);
        history.push('/artist');
    };

    onFailure = (response) => {
        console.log(response);
        this.setState({ isLoading: false });
        this.setState({ errorMessage: response });
    };


    renderBody() {
        if (this.state.errorMessage) {
            return <Error message={this.state.errorMessage} />;
        }
        if (this.state.isLoading)
            return <Spinner message="Please login to your spotify account" />;
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
    }
}

export default Login;