import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import useRegistrationlogInService from '../../../services/registration-logInService';

import '../Registration-LogIn.css'

const LogInForm = () => {



    const remEff = () => {
        setTimeout(() => {
        let wrapper = document.querySelector('.wrapper-log')
        wrapper.classList.add('active')
        }, 0)
    }

    useEffect(remEff)

    return (
        <div className="outer">
            <div className="wrapper wrapper-log">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail" /></span>
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed" /></span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn" style={{ 'background': '#162938', 'color': '#fff' }}>Login</button>
                        <div className="login-register">
                            <p>Don't have an account?<Link to="/registration" className="register-link">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInForm