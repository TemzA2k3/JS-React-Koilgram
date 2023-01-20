import { Component } from "react";
import './logIn-form.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class LogInForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: '',
            isRememberMe: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userName: '',
            password: '',
            isRememberMe: false
        })
    }

    onRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
            
    }


    onLogIn = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        const {userName, password, isRememberMe} = this.state
        return(
            <div className="outer">
            <Form onSubmit={this.onSubmit} className="outerForm">
                <div className="topImage">
                    <h1 className="headBegin">Koil<span className="headEnd">Gram</span></h1>
                </div>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                <Form.Label className="label" column sm="5">Username</Form.Label>        
                <Col sm="6">
                    <Form.Control onChange={this.onLogIn} value={userName} name="userName" type="userName" placeholder="Enter Username" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label className="label" column sm="5">Password</Form.Label>
                <Col sm="6">
                    <Form.Control onChange={this.onLogIn} value={password} name="password" type="password" placeholder="Password" />
                </Col>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div className="checkBoxAndLink">        
                    <input type="checkbox" value={isRememberMe} onChange={this.onRememberMe}/>
                    <label  className="checkBoxInner label">Remember me</label>   
                    <a className="posRightLink label" href="https://www.youtube.com/">Forgot Your Password?</a>
                </div>
            </Form.Group>
            <a className="label" href="/">Don't Have an Account?</a>
            <div className="innerBtn">
                <button class="button"><span>Log In</span></button>    
            </div> 
            </Form>
        </div>
        )
    }


}

export default LogInForm