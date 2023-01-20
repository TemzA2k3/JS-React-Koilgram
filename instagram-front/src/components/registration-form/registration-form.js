import { Component } from "react";
import './registration-form.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',
        }        
    }

    onRegistation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    onSubmit = (e) => {
        e.preventDefault();
        const resObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:8080/koilgram/register', resObj).then()
        this.setState({
            userName: '',
            email: '',
            password: '',
        })       
    }


    render(){
        const {userName, email, password} = this.state
        return(
            <div className="outer">
                <Form onSubmit={this.onSubmit} className="outerForm">
                    <div className="topImage">
                        <h1 className="headBegin">Koil<span className="headEnd">Gram</span></h1>
                    </div>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                    <Form.Label className="label" column sm="5">Username</Form.Label>        
                    <Col sm="6">
                        <Form.Control onChange={this.onRegistation} value={userName} name="userName" type="userName" placeholder="Enter Username" />
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
                        <label  className="checkBoxInner label">Already Have Account?</label>
                        <a className="posRightLink label" href="/logIn">Log In</a>
                    </div>
                </Form.Group>
                <button class="button"><span>Register</span></button>     
                </Form>
            </div>
        )
    }


}

export default RegistrationForm