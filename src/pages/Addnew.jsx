import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/Addnew.module.css';

const Addnew = () => {
  const [recipe, setRecipe] = useState({
    name:'',
    author:'',
    origin:'',
    flag:'',
    description:'',
    image:'',
    ingredients:[
      {
        item:"",
        quantity:""
      }
    ],
    instructions:''

  })

  const[ingredientFields, setIngredientFields]=useState([{
    item:'', quantity:''
}])

const [countryList, setCountryList] =useState([{name:''}])
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
  setIsLoading(true)
  axios.get('https://restcountries.com/v3.1/all')
  .then((response) =>{
      let countries = [];
      response.data.map((item) => {
          const name = item.name.common;
          let temp ={name};
         countries.push(temp)
         countries.sort((a,b) => a.name > b.name? 1: -1)
         return(countries)
      })
      setCountryList(countries)
      setIsLoading(false)
  })
  .catch((err)=> console.log(err.message))
  
},[])

if(isLoading){
  return <p>Loading...</p>
}

const addFields =(e) =>{
  e.preventDefault();
  let object = {
      item:'',
      quantity:''
  }
  setIngredientFields([...ingredientFields, object])
}


  const addIngredients = (e, index) => {
    let ingredientValues = [...ingredientFields];
    ingredientValues[index][e.target.name]=e.target.value;
    setIngredientFields(ingredientValues);
    setRecipe({...recipe, ingredients:ingredientFields})
  }

  const changeHandle = e => {
    setRecipe({...recipe, [e.target.name]:e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault()
    postHandler()
    window.location.reload()

  }

  const postHandler =async () => {
    try {
      
     await axios.post('http://localhost:3001/recipe', recipe);
    } catch (error) {
      
    }
    
  }

  
  return (
    <div className={styles.addnew}>
      <form className={styles.form} onSubmit={submitHandler} >
    <h1>Add new recipe</h1>
        <label 
        htmlFor='name'>Name:
        <input 
        type='text' 
        name='name'
        onChange={changeHandle}
        required
        /></label>
        <label 
        htmlFor='author'>Author:
        <input 
        type='text'  
        name='author'
        autoComplete='off'
        onChange={changeHandle}
        /></label>
        <label 
        htmlFor='origin'>Recipe is from:
        </label>
        <select name='origin' defaultValue={"Select"} onChange={changeHandle}>
        <option value="Select" disabled={true}>Select a country</option>
        {countryList && countryList
        .map(item =>{
            return (<option key={item.name} value={item.name}>{item.name}</option>)
        })}
        </select>
        <label 
        htmlFor='description'>Description:
        </label>
        <textarea 
        name='description'
        onChange={changeHandle}>
        </textarea>
        <label 
        htmlFor='image'>image:
        <input 
        type='text' 
        name='image'
        autoComplete='off'
        onChange={changeHandle}
        /></label>
        <label 
        htmlFor='ingredients'>Ingredients:
        </label>
        <div className={styles.form2}>
        {ingredientFields.map((ingredients, index)=>{
        return(
            <div key={index}>
            <label 
            htmlFor='item'>Item:
            <input 
            type='text'  
            name='item'
            value={ingredients.item}
            onChange={(e) => addIngredients(e,index)}
            /></label>
            <label 
            htmlFor='quantity'>Quantity:
            <input 
            type='text' 
            name='quantity'
            value={ingredients.quantity}
            onChange={(e) => addIngredients(e,index)}
            /></label>
            </div>
        )
        })}
        <button 
        onClick={addFields}>add more</button>
        </div>
        <label 
        htmlFor='instructions'>Instructions:
        </label>
        <textarea name='instructions'
        onChange={changeHandle}>
        </textarea>
        <input 
        type='submit' 
        value='Post recipe'
        // onClick={submitHandler}
        />
    </form>
    </div>
  )
}

export default Addnew