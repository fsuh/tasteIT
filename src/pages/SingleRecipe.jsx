import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';


const SingleRecipe = () => {
    const {params} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false)


    useEffect(()=>{
        setIsLoading(true)
        axios.get(`http://localhost:3001/recipe/${params.singlerecipe}`)
        .then((res)=>{
            setData(res.data);
            setIsLoading(false)
        })
    },[params])

    if(isLoading){
        return <p>Loading...</p>
    }

    console.log(data)


  return (
    <div>
    <div>
    <h2>{data.name}</h2>
    <table>
        <tbody>
            {data.ingredients?.map((ingredient)=>{
                return (
                    <tr key={ingredient.ingredient}>
                        <td>
                            {ingredient.item} - {ingredient.quantity}
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </div>
    <div>
        <h4>Author:</h4> <p>{data.author}</p>
        <h4>Source Country:</h4> <p>{data.origin}</p>
        <h4>Description:</h4> <p>{data.author}</p>
    </div>

    <button onClick={()=>navigate(-1)}>Go Back</button>

    </div>
  )
}

export default SingleRecipe