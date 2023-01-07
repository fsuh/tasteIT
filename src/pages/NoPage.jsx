import React from 'react';
import {Link} from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
        <h2>Something Went wrong...</h2>
        <p>return to <Link to='/' >Home</Link></p>
    </div>
  )
}

export default NoPage