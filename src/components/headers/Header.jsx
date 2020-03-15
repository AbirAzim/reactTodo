import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className='text-warning text-center m-2 p-2 bg-dark sticky-top'>
            <h1>Todo-List</h1>
            <Link style={{color : 'White', textDecoration : 'none'}} to='/'>Home</Link> <span className='text-secondary'> | </span><Link style={{color : 'white', textDecoration : 'none'}} to='/about'>About</Link>
        </header>
    )
}
