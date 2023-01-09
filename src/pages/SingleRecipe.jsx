import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

import styles from '../styles/SingleRecipe.module.css'


const SingleRecipe = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false)
    const [flagArr, setFlagArr]=useState();


    useEffect(()=>{
        setIsLoading(true)
        axios.get(`http://localhost:3001/recipe/${params.recipedetails}`)
        .then((res)=>{
            setData(res.data);

            axios.get('https://restcountries.com/v3.1/name/' + res.data.origin)
            .then((res) => {setFlagArr(res.data[0].flags.svg)})
            setIsLoading(false)
        })
    },[params])

    if(isLoading){
        return <p>Loading...</p>
    }

  return (
    <div className={styles.single}>

    <h2>{data.name}</h2>

    <div className= {styles.images}>
    <img src={data.image} alt={data.name} className={styles.foodImg}/>
    <img src={flagArr} alt={data.origin} className={styles.flagImg}/>

    </div>
    <div className={styles.ingredients}>
    <h4>Ingredients:</h4>
    <table>
        <tbody>
            {data.ingredients?.map((specific)=>{
                return (
                    <tr key={specific.item}>
                        <td>
                            {specific.item} - {specific.quantity}
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </div>
    <div className={styles.authorship}>
        <h4>Author:</h4> 
        <p>{data.author}</p>
        <h4>Source Country:</h4> 
        <p>{data.origin}</p>
        <h4>Description:</h4> 
        <p>{data.description}</p>
    </div>
    <div className={styles.instructions}>
        <h4>Preparation</h4>
        <p>{data.instructions}</p>
    </div>

    </div>
  )
}

export default SingleRecipe