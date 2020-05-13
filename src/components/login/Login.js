import React from 'react';

import LoginBody from './loginBody';
import SpotifyLogin from 'react-spotify-login';
import history from '../../history';

import { clientId, redirectUri } from '../Shared/settings';
import Spinner from '../Shared/Spinner';
import Error from '../Shared/Error'
import '../styles/login.css';

class Login extends React.Component {
    state = { errorMessage: null, isLoading: null };

    Clicked = () => this.setState({ isLoading: true });

    onSuccess = (response) => {
        this.setState({ isLoading: false });
        localStorage.setItem("token", response.access_token);
        history.push('/artist');
    };

    onFailure = (response) => {
        this.setState({ isLoading: false });
        this.setState({ errorMessage: response.message });
    };

    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

    renderBody() {
        if (this.state.errorMessage) {
            return (
                <div>
                    <Error message={this.state.errorMessage} />
                    <div className="login" >
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
                </div>
            );
        }
        if (this.state.isLoading)
            return <Spinner message="Please wait until we log you in" />

        return (
            <div className="login" >
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