import React,{Fragment, useState} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from "axios";


const SignUp = ()=>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("");
    const [user, setUser] = useState('');
    const navigate = useNavigate()


    const getFirstName =(event)=>{
        setFirstName(event.target.value)
    }
    const getLastName =(event)=>{
        setLastName(event.target.value)
    }
    const getEmail =(event)=>{
        setEmail(event.target.value)
    }
    const getPassword =(event)=>{
        setPassword(event.target.value)
    }
    const getpasswordCheck =(event)=>{
        setPasswordCheck(event.target.value)
    }

    const submitHandler = async(event) =>{
        event.preventDefault();
        if (passwordCheck !== password) {
            alert("WRONG PASSWORD")
            navigate('/sign-up')
            setPassword("")
            setPasswordCheck("")
        } else {
        var axios = require('axios');
        var data = JSON.stringify({
          "email": email,
          "password": password,
          "passwordCheck": passwordCheck,
          "firstName": firstName,
          "lastName": lastName
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:1090/signup',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setUser(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        if (data) {
            navigate('/sign-in')
        }
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPasswordCheck("")}
    }

    return(
        <Fragment>
            <Container className='auth-form-container' >
                <Form className='auth-form-signup' onSubmit={submitHandler}>
                    <h3 className='auth-form-title'>Sign Up</h3>
                    <Form.Group className='auth-form-content'>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" placeholder="First Name" onChange={getFirstName} value={firstName}/>
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="name" placeholder="Last Name" onChange={getLastName} value={lastName}/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="name" placeholder="Email Address" onChange={getEmail} value={email}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={getPassword} value={password}/>
                            <Form.Text className="text-muted">
                                Your password must be 8-20 characters long, contain letters and numbers.
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={getpasswordCheck} value={passwordCheck}/>
                            <Form.Text className="text-muted">
                                Enter your password again.
                            </Form.Text>
                        </Form.Group>

                        
                        <Button variant="primary" type="submit" className="col-sm-12">
                        Submit
                        </Button>
                        
                        

                        <Form.Group>
                            <Form.Text className='createAcc'>
                                Already have an account? <NavLink to='/sign-in'>Sign In</NavLink> 
                            </Form.Text>
                            
                        </Form.Group>

                    </Form.Group>
                </Form>
            </Container>
        </Fragment>
    )
}

export default SignUp