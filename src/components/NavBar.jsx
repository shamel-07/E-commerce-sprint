import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/">Product</Link>
            <Link className='nav-link' to="/create">Create Product</Link>
        </div>
    )
}

export default NavBar
