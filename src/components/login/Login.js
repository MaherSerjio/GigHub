import React from 'react';

import LoginBody from './loginBody';
import Spinner from '../Shared/Spinner';
import Error from '../Shared/Error'
import '../styles/login.css';

class Login extends React.Component {
    state = { errorMessage: null, isLoading: null };

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
                    <LoginBody />
                </div>
            );
        }
        if (this.state.isLoading)
            return <Spinner message="Please wait until we log you in" />;

        return <LoginBody />;
    }
}

export default Login;