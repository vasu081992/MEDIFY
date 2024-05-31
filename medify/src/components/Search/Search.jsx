import React, { useEffect , useState } from 'react'
import axios from 'axios'
import styles from "./Search.module.css"


function Search() {

    const [states,setStates]=useState([]);
    const [formData,setformData]=useState({
        state:'',
        city:''
    })
    const [cities,setCities]= useState([])

    console.log("state chosen", formData.state);

    console.log("states",states)

    console.log("cities of selected state",cities)

    useEffect(()=>{
 
        let fetchStates = async () => {
    let url =  'https://meddata-backend.onrender.com/states';
    let response =await axios.get(url);
    let data= await response
setStates(data.data)
    }
    fetchStates()
},[])

useEffect (()=>{

    let fetchCities = async () => {
        let url2 =  `https://meddata-backend.onrender.com/cities/${formData.state}`
        let response =await axios.get(url2);
        let data= await response;
        console.log("cities data",data);
        setCities(data.data)
        }
        fetchCities()

},[formData.state])



const handleStateChange =(e)=>{
    setformData({
        state: e.target.value
    })

}

const handleStateChangeCity =(e)=>{
    setformData({
        city: e.target.value
    })
}
  return (
    <div>
 
 <label for="states">State:</label>
 <select name="states" id="states" className={styles.select} onChange={handleStateChange} value={formData.state}>
 <option value="">Select a state...</option>
{states.length>0 && 
    states.map((state)=>(
        <option key={state} value={state}>
        {state}
      </option>  
    ))
 }

</select>

<label for="cities">City:</label>
 <select name="cities" id="cities" className={styles.select} onChange={handleStateChangeCity} value={formData.city}>
 <option value="">Select a city...</option>
{cities.length>0 && 
    cities.map((city)=>(
        <option key={city} value={city}>
        {city}
      </option>  
    ))
 }

</select>
    </div>
  )
}


export default Search