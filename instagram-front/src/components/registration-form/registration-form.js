import { Component } from "react";
import './registration-form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

    render(){
        return(
    <div className="outer">
    <Form className="outerForm">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
            <Form.Label column sm="5">Username</Form.Label>        
            <Col sm="6">
                <Form.Control type="userName" placeholder="Enter Username" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">Email</Form.Label>        
            <Col sm="6">
                <Form.Control type="email" placeholder="Enter email" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="5">Password</Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>  

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        )
    }


}

export default RegistrationForm