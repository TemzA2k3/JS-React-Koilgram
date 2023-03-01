import { useState } from 'react';
import useRegistrationlogInService from '../../../services/registration-logInService';



import Spinner from '../../Spinner/Spinner';






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
        <div className="outer">
            <div className="wrapper">
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
                        <button type="submit" className="btn-log">Login</button>
                        <div className="login-register">
                            <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}



export default RegistrationForm