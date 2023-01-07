import React from 'react'
import classes from '../styles/Main.module.css'
import {Outlet} from 'react-router-dom'

const Main = () => {
  return (
    <main className={classes.main}>
        <Outlet />
    </main>
  )
}

export default Main