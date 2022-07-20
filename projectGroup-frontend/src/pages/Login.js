import React, {Fragment, useState} from 'react'
import './Auth.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Container} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login =(props) =>{

  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [username, setUsername] = useState('')

    const getEmail = (event) =>{
        setEmail(event.target.value)
    }
    const getPassword = (event) =>{
        setPassword(event.target.value)
    }
  /* 
    const submitHandler = async (event) =>{
        event.preventDefault()
        const user = {email, password};
        const response = await axios.post("http://localhost:1090/login", user);

        setUser(response.data.token)
        localStorage.setItem('user',response.data.token)
        if (user) {
            navigate('/')
        } else {
            alert("Please create an account")
        }
        console.log(response.data);
        setEmail("")
        setPassword("")
    } */
        


    const onSubmit = async(e) => {
        e.preventDefault()
        try {
            const user = {email, password};
            const response = await axios.post("http://localhost:1090/login", user);
            console.log("On login: ", response.data);
            setUser(response.data.token)
            setUsername(response.data.user.firstName)
            localStorage.setItem('user',response.data.token)
            localStorage.setItem('username',response.data.user.firstName)
            if (user) {
                props.submitHandler(response)
                navigate('/') 
            } else  {
                alert("Please create an account") }
            } catch (e){
                console.log(e.response.data.code);
                if(e.response.data.code === 999){
                    alert("Please create an account")
                } 
                else if(e.response.data.code === 998){
                    alert("Invalid email or password")
                }
                else if(e.response.data.code === 997){
                    alert("Not all fields have been entered")
                }
                else{
                    alert("Oops, something is wrong!!")
                }
                 
            }
       
    }
    return(
        <Fragment >
            
            <Container className='auth-form-container' >
                <Form className='auth-form' onSubmit={onSubmit}>
                    <h3 className='auth-form-title'>Sign In</h3>
                    <Form.Group className='auth-form-content'>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={getEmail} value={email}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={getPassword} value={password}/>
                        </Form.Group>

                        
                        <Button variant="primary" type="submit" className="col-sm-12">
                        Submit
                        </Button>
                        
                        

                        <Form.Group>
                            <Form.Text className='createAcc'>
                                Don't have an account? <NavLink to='/sign-up'>Create one</NavLink> 
                                
                            </Form.Text>
                            
                        </Form.Group>

                    </Form.Group>
                </Form>
            </Container>

        </Fragment>
        
    )
}

export default Login