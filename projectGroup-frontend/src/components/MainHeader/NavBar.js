import { Fragment, useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import {Container,Row, Col} from 'react-bootstrap'
import './NavBar.css'



function NavBar(props){
    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     setUser(localStorage.getItem('user'))
    // },[])
    // // useEffect(() => {
    // //     setUser(localStorage.getItem('user'))
    // // },[user])

    const onLogout = () => {
        props.handleLogout();
    }


    return(
        
        <Container className="header">
            <Row>
                {/* <p>{user.toString()}</p> */}

                {props.user && 
                <Col sm={6} className='logo'><NavLink to="/">BizTech Buzz</NavLink></Col>}
                {!props.user && 
                <Col sm={10} className='logo'><NavLink to="/">BizTech Buzz</NavLink></Col>}
                {props.user && <Col className='username'>Hello, {localStorage.getItem('username')} !</Col>}
                {props.user && 
                <Col sm={2}  className='sign-in'><NavLink to="/" onClick={onLogout}>Log Out</NavLink></Col> 
                }
                {props.user && 
                <Col sm={2} className='sign-in'><NavLink to="/saved">Saved</NavLink></Col>
                }
                {!props.user && <Col sm={4}  className='sign-in'><NavLink to="/sign-in">Sign In</NavLink></Col> }
            </Row>
        </Container>
       
    )
}

export default NavBar