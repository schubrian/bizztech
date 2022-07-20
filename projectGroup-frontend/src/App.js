import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage';
import MainLayout from './components/layout/MainLayout';
import SignUp from './pages/SignUp';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Saved from './pages/Saved';



function App() {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState();
    const [userName, setUsername] = useState('')
    //const navigate = useNavigate();

    const getEmail = (event) =>{
        setEmail(event.target.value)
    }
    const getPassword = (event) =>{
        setPassword(event.target.value)
    }

    const submitHandler = (response) =>{
        // event.preventDefault()
        setUser(response.data.token)
        setUsername(response.data.user.firstName)
       console.log(response);
        setEmail("")
        setPassword("")
    }
    const handleLogout = () => {
      setUser(null)
      localStorage.clear()
    } 
   


    useEffect(() => {
      console.log("App.js useEffect 2")
        setUser(localStorage.getItem('user'))
    },[user])


    return (
        <Fragment>
            <BrowserRouter>
            <MainLayout userData={user} username={userName} handleLogout={handleLogout}>
                <Routes>
                    <Route path="/sign-in" element={<Login submitHandler={submitHandler} getEmail={getEmail} password={password} email={email} getPassword={getPassword}/>}/>
                    <Route path="/" element={<LandingPage user={user} />}/>
                    <Route path="/saved" element={<Saved user={user}/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes>
            </MainLayout>
            </BrowserRouter>
        </Fragment> 
          
  )
}

export default App;