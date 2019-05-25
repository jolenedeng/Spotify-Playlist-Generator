import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        if (!this.props.loggedIn) {

        return (
            <div className="login">
                <a href="http://localhost:8888">
                    Login with Spotify
                </a>
            </div>
        )

        }

        return (
            <div className="loggedIn">
            </div>
        )
    }
}

export default Login;