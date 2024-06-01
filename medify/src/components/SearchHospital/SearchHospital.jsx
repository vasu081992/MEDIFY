import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


function SearchHospital() {

    const [states,setStates]=useState([]);
    const [formData,setformData]=useState({
        state:'',
        city:''
    })
    const [cities,setCities]= useState([])
    const navigate = useNavigate();

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
     
        if (formData.state !== "") {
            fetchCities();
          }
},[formData.state])



const handleStateChange =(e)=>{
    setformData({
        state: e.target.value
    })

}

const handleStateChangeCity =(e)=>{
    setformData({
        ...formData,
        city: e.target.value
    })
}

const handleSubmit = (e)=>{
    e.preventDefault();
    if(formData.state && formData.city){
        navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
}
//   return (
//     <form onSubmit={handleSubmit}>
 
//  <label for="states">State:</label>
//  <select name="states" id="states" className={styles.select} onChange={handleStateChange} value={formData.state}>
//  <option value="">Select a state...</option>
// {states.length>0 && 
//     states.map((state)=>(
//         <option key={state} value={state}>
//         {state}
//       </option>  
//     ))
//  }

// </select>

// <label for="cities">City:</label>
//  <select name="cities" id="cities" className={styles.select} onChange={handleStateChangeCity} value={formData.city}>
//  <option value="">Select a city...</option>
// {cities.length>0 && 
//     cities.map((city)=>(
//         <option key={city} value={city}>
//         {city}
//       </option>  
//     ))
//  }

// </select>

// <button type="submit"> Search </button>
//     </form>
//   )

return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleStateChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleStateChangeCity}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );


}


export default SearchHospital