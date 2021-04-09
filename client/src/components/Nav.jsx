import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <div className="head">
            <h1 className="project-name">Memestagram</h1>
          
                <nav>
                    <NavLink to="/">Dashboard</NavLink>
                    <NavLink to="/createpost">Create Post</NavLink>
                </nav>
         
        </div>
    )
}

export default Nav