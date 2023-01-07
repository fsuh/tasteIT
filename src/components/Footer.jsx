import React from 'react'
import classes from '../styles/Footer.module.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <div>
        <img src={logo} alt="fsuh logo" />
    </div>
    <p>Copyright &copy; 2022 Fuh Suh</p>

    </footer>
  )
}

export default Footer