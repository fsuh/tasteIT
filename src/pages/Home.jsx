import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../styles/Home.module.css'
import Video from '../assets/video.mp4';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.homeHeader}>
      <video autoPlay muted loop>
        <source src={Video} type='video/mp4'/>
      </video>
      <div className='videoOverlay'>
        <h2>TasteIT</h2>
        <p>TasteIT is recipe app which is made in REACT22S group React Lessons.</p>
        <Link to='/recipies'>Browse recipes</Link>
        </div>
      </section>
      <section className={styles.homeMain}>
        <h3>Looking for the recipes?</h3>
        <div className={styles.mainContent}>
        <div>
          <h4>Browse recipes</h4>
          <p>Find your favourites in this selection.You can search recipes based on name or country</p>
          <Link to='/recipies'>All recipes</Link>
        </div>
        <div>
          <h4>Add recipes</h4>
          <p>Recipe from your country is missing?.No worries, add one!</p>
          <Link to='add-new'>Add recipes</Link>
        </div>
        <div>
          <h4>Want to know more about our projects</h4>
          <p>Visit our programme homepage</p>
          <Link to={{ pathname:'https://en.bc.fi/'}} target='_blank'>Business College Helsinki homepage</Link>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Home