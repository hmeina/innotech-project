import React from 'react';
import './Register.css'; 

function Register() {
    return (
        <div className="register-container">
            <h2>CREATE AN ACCOUNT</h2>
            <form className="register-form">
                <label>
                    First Name
                    <input type="text" name="firstName" required />
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" required />
                </label>
                <label>
                    Date of Birth
                    <input type="date" name="dob" required />
                </label>
                <label>
                    Email
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password
                    <input type="password" name="password" required />
                </label>
                <label>
                    Confirm Password
                    <input type="password" name="confirmPassword" required />
                </label>
                <div className="user-type">
                    <label>
                        <input type="radio" name="userType" value="student" required />
                        A Student
                    </label>
                    <label>
                        <input type="radio" name="userType" value="company" required />
                        A Company
                    </label>
                </div>
                <label className="terms">
                    <input type="checkbox" required />
                    By checking this box, I agree to the Terms of Service and Privacy Policy.
                </label>
                <button type="submit">REGISTER</button>
                <p className="signin-link">Already have an account? <a href="/login">Sign In</a></p>
            </form>
        </div>
    );
}

export default Register;