import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/water">Water</Link>
                <Link to="/meal">Meal</Link>
                <Link to="/exercise">Exercise</Link>
                <Link to="/sleep">Sleep</Link>
                <Link to="/periods">Periods</Link>
            </nav>
        </div>
    )
}

export default NavBar;