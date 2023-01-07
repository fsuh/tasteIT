import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/recipies">Recipies</NavLink></li>
        <li><NavLink to="/add-new">Add New Recipe</NavLink></li>
    </ul>

    </nav>
  )
}

export default Nav