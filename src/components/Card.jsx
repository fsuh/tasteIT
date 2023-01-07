import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Card.module.css'

const Card = ({image, name, flag, country}) => {
  return (
    <div className={styles.card}>
        <div className='recipe'>
            <img src={image} alt={name} />
        </div>
        <div className={styles.flag}>
            <img src={flag} alt={country} />
        </div>
        
        <h3>{name}</h3>
        <Link to={`/recipies`}>see more...</Link>

    </div>
  )
}

export default Card