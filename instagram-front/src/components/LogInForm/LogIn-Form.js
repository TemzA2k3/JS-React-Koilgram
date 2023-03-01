import { useState } from 'react'
import useRegistrationlogInService from '../../services/registration-logInService';

import './LogInForm.css'


const LogInForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showedMessage, setShowedMessage] = useState(undefined)

    const { loading, error, userRegistration } = useRegistrationlogInService()

    return (
        <div className="outer">
            <div className="wrapper-log">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail" /></span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed" /></span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn-reg">Login</button>
                        <div className="login">
                            <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInForm