import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Recipies.module.css';

const Recipies = () => {

  const [data, setData] =useState([])
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading]=useState(false);
  // const [flagArr, setFlagArr] = useState()


  useEffect(()=>{
    setIsLoading(true)

    axios.get('http://localhost:3001/recipe')
    .then((res)=>{
      setData(res.data);
      setIsLoading(false)
    })
    .catch((err)=>console.log(err.message));

    
  },[])

  if(isLoading){
    return <p>Loading...</p>
  }

  const handleChange = e =>{
    setSearchInput(e.target.value)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  const search = (data) =>{
    return data.filter(
      (item) =>
      item.name.toLowerCase().includes(searchInput)||
      item.origin.toLowerCase().includes(searchInput))
  }

  return (
    <div className={styles.recipes}>
      <SearchBar 
        submit={handleSubmit}
        onChange={handleChange}
        value={searchInput}
      />

    <div className={styles.results}>

    {search(data).map((item) =>(
      <Card key={item.id}
        image={item.image}
        name={item.name}
        country={item.origin}

      />


    ))}

    </div>
    </div>
  )
}

export default Recipies