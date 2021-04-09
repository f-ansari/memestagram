import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <header>
                <nav>
                    <NavLink to="/">Dashboard</NavLink>
                    <NavLink to="createpost">Create Post</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Nav