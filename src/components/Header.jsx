import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import classes from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
    <Link to="/">
        <h3>tasteIT</h3>
    </Link>
    <Nav />

    </header>
  )
}

export default Header
