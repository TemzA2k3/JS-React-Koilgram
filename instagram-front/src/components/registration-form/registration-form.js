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
            isRememberMe: false
        }        
    }

    onRegistation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
            
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userName: '',
            email: '',
            password: '',
            isRememberMe: false
        })
    }


    render(){
        const {userName, email, password, isRememberMe} = this.state
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
                <input type="checkbox" value={isRememberMe} onChange={this.onRememberMe}/>
                <label  className="checkBoxInner label">Remember me</label>   
                <a className="posRightLink label" href="https://getbootstrap.com/">Forgot password?</a>
            </div>
        </Form.Group>
        <button class="button"><span>Hover</span></button>     
    </Form>
    </div>
        )
    }


}

export default RegistrationForm