import React, {useState} from 'react';
import axios from 'axios'
import Form from '../components/Form'
import styles from '../styles/Addnew.module.css'

const Addnew = () => {
  const [recipe, setRecipe] = useState({
    name:'',
    author:'',
    origin:'',
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

  const addIngredients = () => {
    let temp = [...recipe.ingredients];
    temp.push({
      item:'',
      quantity:'',
    })
    setRecipe({...recipe, ingredients:temp})
  }

  const changeHandle = e => {
    setRecipe({...recipe, [e.target.name]:e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault()
    postHandler()

  }

  const postHandler = () => {
    axios.post('http://localhost:3001/recipe', recipe)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  
  return (
    <div className={styles.addnew}>
      <Form 
        onChange={changeHandle}
        submit={submitHandler}
      />
    </div>
  )
}

export default Addnew