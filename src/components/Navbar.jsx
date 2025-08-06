import React from 'react'
import { Link } from 'react-router-dom';
import '../css-components/Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <h1>FitBuddy</h1>
                </div>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/water">Water</Link>
                    <Link to="/meal">Meal</Link>
                    <Link to="/exercise">Exercise</Link>
                    <Link to="/sleep">Sleep</Link>
                    <Link to="/periods">Periods</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;