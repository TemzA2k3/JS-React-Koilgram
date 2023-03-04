import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import useRegistrationlogInService from '../../../services/registration-logInService';

import '../Registration-LogIn.css'

import Spinner from '../../Spinner/Spinner';

const RegistrationForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showedMessage, setShowedMessage] = useState(undefined)

    const { loading, error, userRegistration, clearError } = useRegistrationlogInService()

    const onSubmit = (e) => {
        e.preventDefault()
        clearError()
        setShowedMessage(undefined)
        const userInfo = {
            email,
            password,
            username,
        }
        userRegistration(JSON.stringify(userInfo)).
            then((data) => setShowedMessage(data.message))
    }


    const animation = () => {
        setTimeout(() => {
        let wrapper = document.querySelector('.wrapper-reg')
        wrapper.classList.add('active')
        }, 0)
    }

    useEffect(() => {
        animation()
    },[])

    const spinner = loading ? <Spinner/> : null

    return (
        <div className="outer">
            <div className="wrapper wrapper-reg">
                <div className="form-box register">
                    <h2>Registration</h2>
                    <form onSubmit={onSubmit}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person" /></span>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail" /></span>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed" /></span>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />I agree to the terms &amp; conditions</label>
                        </div>
                        <div className='err'>
                        {spinner}
                        {error}
                        {showedMessage}
                        </div>
                        <button type="submit" style={{'background': '#162938', 'color': '#fff'}} className="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account?<Link to="/koilgram/login" className="login-link">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}



export default RegistrationForm