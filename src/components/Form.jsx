import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../styles/Form.module.css'

const Form = ({onChange, submit}) => {
    const[ingredientFields, setIngredientFields]=useState([{
        item:'', quantity:''
    }])

    const [countryList, setCountryList] =useState([{
        name:'',
        flag:''
    }])


    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((response) =>{
            let countries = [];
            response.data.map((item, index) => {
                const name = item.name.common;
                let temp ={name};
               return  countries.push(temp)
            })
            setCountryList(countries)
        })
    },[])



    const addFields =() =>{
        let object = {
            item:'',
            quantity:''
        }
        setIngredientFields([...ingredientFields, object])
    }
  return (
    <form className={styles.form} onChange={onChange} onSubmit={submit}>
    <h1>Add new recipe</h1>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name'/>
        <label htmlFor='author'>Author:</label>
        <input type='text'  name='author'/>
        <label htmlFor='origin'>Recipe is from:</label>
        <select name='origin'>
        {countryList.map(item =>{
            return (<option key={item.name} value={item.name}>{item.name}</option>)
        })}
        </select>
        <label htmlFor='description'>Description:</label>
        <input type='textarea' name='description' />
        <label htmlFor='image'>image:</label>
        <input type='text' name='image'/>
        <label htmlFor='ingredients' name='ingredients'>Ingredients:</label>
        <div className={styles.form2}>
        {ingredientFields.map((form, index)=>{
        return(
            <div key={index}>
            <label htmlFor='item'>Item:
            <input type='text'  name='item'/></label>
            <label htmlFor='quantity'>Quantity:
             <input type='text'  name='quantity'/></label>
            </div>
        )
        })}
        <input type='submit' onClick={addFields} value='add more' />
        </div>
        <label htmlFor='instructions'>Instructions:</label>
        <input type='textarea' name='instructions'/>
        <input type='submit' value='Post recipe'/>
    </form>
  )
}

export default Form