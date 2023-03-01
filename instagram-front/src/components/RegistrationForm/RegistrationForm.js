import { useState } from 'react';
import useRegistrationlogInService from '../../services/registration-logInService';

import './RegistrationForm.css'

import Spinner from '../Spinner/Spinner';


const RegistrationForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showedMessage, setShowedMessage] = useState(undefined)

    const { loading, error, userRegistration } = useRegistrationlogInService()

    const onSubmit = async (e) => {
        e.preventDefault()


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

        setUsername('')
        setEmail('')
        setPassword('')
        setShowedMessage(undefined)
    }

    return (

        <div className='outer'>
            <div className='wrapper-reg'>
                <div className="form-box registration">
                    <h2>Registration</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person" /></span>
                            <input type="text" required />
                            <label>Username</label>
                        </div>
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
                            <label><input type="checkbox" />I agree to the terms &amp; conditions</label>
                        </div>
                        <button type="submit" className="btn-reg">Register</button>
                        <div className="register">
                            <p>Already have an account?<a href="#" className="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>





    )
}



export default RegistrationForm