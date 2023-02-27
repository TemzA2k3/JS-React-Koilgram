import { useState } from 'react';

import './RegistrationForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const RegistrationForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showedMessage, setShowedMessage] = useState(undefined)


    const onSubmit = async (e) => {
        e.preventDefault()
        const resObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password,
                showedMessage
            })
        }

        //cheking

        // eslint-disable-next-line
        const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(mailFormat)){
            setShowedMessage("Incorrect Email") 
            return
        }

        const userFormat = "^$|^[A-Za-z]*$";
        if (!username.match(userFormat)){
            setShowedMessage("Username must include only english letters")
            return
        }

        if (password.length < 5){
            setShowedMessage("Password must be more than 5 symbols")
            return
        }

        if (password.length > 25){
            setShowedMessage("Password must be less than 25 symbols")
            return
        }

         await fetch('http://localhost:8080/koilgram/register', resObj)
            .then(response => {
                if (response.ok === 200) {
                    // this.setState(({
                    //     showedMessage: "You have successfully registered!"
                    // }))
                    const newObj = {
                        "details" : ["You have successfully registered!"]
                    }

                    setTimeout(() => {
                        window.location.href = "/logIn";
                    }, 5000)
                    return newObj
                }
                return response.json()
            }).then((info) => {
                console.log(info)
                setShowedMessage(info.details[0])
            })

        setUsername('')
        setEmail('')
        setPassword('')
        setShowedMessage(undefined)
    }

        return (
            <div className="outer">
                <Form onSubmit={onSubmit} className="outerForm">
                    <div className="topImage">
                        <h1 className="headBegin">Koil<span className="headEnd">Gram</span></h1>
                    </div>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                        <Form.Label className="label" column sm="5">Username</Form.Label>
                        <Col sm="6">
                            <Form.Control name="username" type="username" placeholder="Enter Username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label className="label" column sm="5">Email</Form.Label>
                        <Col sm="6">
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label className="label" column sm="5">Password</Form.Label>
                        <Col sm="6">
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className="checkBoxAndLink">
                            <label className="checkBoxInner label">Already Have Account?</label>
                            <a className="posRightLink label" href="/logIn">Log In</a>
                        </div>
                    </Form.Group>
                    <div>
                        <span className="label err">{showedMessage}</span>
                    </div>
                    <button class="button" type="submit"><span>Register</span></button>
                </Form>
            </div>
        )
    }


export default RegistrationForm