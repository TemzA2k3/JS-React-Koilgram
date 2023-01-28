import { Component } from "react";
import './registration-form.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            showedMessage: undefined
        }

    }

    onRegistation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    onSubmit = (e) => {
        e.preventDefault()
        const resObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }

        //cheking

        // eslint-disable-next-line
        let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.state.email.match(mailFormat)){
            this.setState(({
                showedMessage: "Incorrect Email"
            }))
            return
        }

        let userFormat = "^$|^[A-Za-z]*$";
        if (!this.state.username.match(userFormat)){
            this.setState(({
                showedMessage: "Username must include only english letters"
            }))
            return
        }

        if (this.state.password.length < 5){
            this.setState(({
                showedMessage: "Password must be more than 5 symbols"
            }))
            return
        }

        if (this.state.password.length > 25){
            this.setState(({
                showedMessage: "Password must be less than 25 symbols"
            }))
            return
        }

        fetch('http://localhost:8080/koilgram/register', resObj)
            .then(response => {
                if (response.status === 200) {
                    // this.setState(({
                    //     showedMessage: "You have successfully registered!"
                    // }))
                    let newObj = {
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
                this.setState({
                    showedMessage: info.details[0]
                })
            })

        this.setState({
            username: '',
            email: '',
            password: '',
            showedMessage: undefined
        })  

    }


    render() {
        const { username, email, password, showedMessage } = this.state
        return (
            <div className="outer">
                <Form onSubmit={this.onSubmit} className="outerForm">
                    <div className="topImage">
                        <h1 className="headBegin">Koil<span className="headEnd">Gram</span></h1>
                    </div>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                        <Form.Label className="label" column sm="5">Username</Form.Label>
                        <Col sm="6">
                            <Form.Control onChange={this.onRegistation} value={username} name="username" type="username" placeholder="Enter Username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label className="label" column sm="5">Email</Form.Label>
                        <Col sm="6">
                            <Form.Control value={email} onChange={this.onRegistation} name="email" type="email" placeholder="Enter email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label className="label" column sm="5">Password</Form.Label>
                        <Col sm="6">
                            <Form.Control onChange={this.onRegistation} value={password} name="password" type="password" placeholder="Password" />
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


}

export default RegistrationForm