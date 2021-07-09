import React from 'react';
import {GoogleOutlined , FacebookOutlined} from '@ant-design/icons';

// functional component
const Login = () => {
    // here we will have JSX for our form with our 2 buttons(facebook and google login)
    return (
        <div id = "login-page">
            <div id = "login-card">
                <h2>Welcome to Let's Chat!</h2>

                <div className = "login-button google">
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br/> <br/>

                <div className = "login-button facebook">
                    <FacebookOutlined /> Sign In with facebook
                </div>
            </div>
        </div>
    );
}

export default Login;
