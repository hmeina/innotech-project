import React from 'react';
import './Login.css';
import InnotechLogo from '../assets/InnotechLogo.png'; 

function Login() {
    return (
        <div className="login-container">
            <img src={InnotechLogo} alt="Innotech Logo" className="innotech-logo" />
            <h2>WELCOME</h2>
            <form className="login-form">
                <label>
                    EMAIL
                    <input type="email" name="email" required />
                </label>
                <label>
                    PASSWORD
                    <input type="password" name="password" required />
                </label>
                <button type="submit" className="login-button">LOGIN</button>
            </form>
            <p className="forgot-password">FORGOT PASSWORD?</p>
            <p className="sign-up">
                DON'T HAVE AN ACCOUNT? <a href="/register">SIGN UP</a>
            </p>
        </div>
    );
}

export default Login;
