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

    const { loading, error, userRegistration } = useRegistrationlogInService()

    const onSubmit = (e) => {
        // e.preventDefault()
        const userInfo = {
            username,
            email,
            password
        }
        userRegistration(userInfo).
            then((data) => setShowedMessage(data))



    // cheking
    // eslint-disable-next-line
    // await fetch('http://localhost:8080/koilgram/register', resObj)
    //     .then(response => {
    //         if (response.ok === 200) {
    //             // this.setState(({
    //             //     showedMessage: "You have successfully registered!"
    //             // }))
    //             const newObj = {
    //                 "details" : ["You have successfully registered!"]
    //             }

    //             setTimeout(() => {
    //                 window.location.href = "/logIn";
    //             }, 5000)
    //             return newObj
    //         }
    //         return response.json()
    //     }).then((info) => {
    //         console.log(info)
    //         setShowedMessage(info.details[0])
    //     })

    }


    const eff = () => {
        setTimeout(() => {
        let wrapper = document.querySelector('.wrapper-reg')
        wrapper.classList.add('active')
        }, 0)
    }

    useEffect(() => {
        eff()
    },[])

    const errorMessage = error ? <div className='err'>{showedMessage}</div> : null

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
                        {errorMessage}
                        <button type="submit" style={{'background': '#162938', 'color': '#fff'}} className="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account?<Link to="/" className="login-link">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}



export default RegistrationForm