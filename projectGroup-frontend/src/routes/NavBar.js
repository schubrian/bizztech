import React from 'react';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='nav'>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/bookmark">Bookmarks</a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar