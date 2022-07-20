import React, {Fragment} from 'react'
import NavBar from '../MainHeader/NavBar'
import './MainLayout.css'


const MainLayout = (props) =>{
    return(
        <Fragment>
            <div className='mainLayout'>
                <NavBar username={props.username} user={props.userData} handleLogout={props.handleLogout}></NavBar>
                {props.children}
            </div>
            
        </Fragment>
    )
    
}

export default MainLayout