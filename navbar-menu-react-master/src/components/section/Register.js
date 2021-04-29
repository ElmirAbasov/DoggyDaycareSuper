import React, {useState, useEffect } from 'react'
import axios from 'axios'
import BreedGrid from '../breeds/BreedGrid'
import Search from '../ui/Search'
import './Register.css'






const Register = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
  
  useEffect(() => {
   const fetchItems = async () => {
     const result = await axios(
       `https://api.jsonbin.io/b/6087bdb95210f622be3adeb7`
  
     )
       let items = []
  
     if (query !== "" ) {
       items = result.data.filter(dog => dog.name.toLowerCase().includes(query.toLowerCase())
       ||
       dog.breed.toLowerCase().includes(query.toLowerCase()))
  
     } else {
      items = result.data
  
     }
  
     setItems(items)
     setIsLoading(false)
   }
  
   fetchItems()
  }, [query])
  
    return (
      <div className='Register' > 
     
     <div className='container'>
     
        
        <Search getQuery={(q) => setQuery(q)} />
        <BreedGrid isLoading={isLoading} items={items} />
        
      </div>
      </div>
    );
  };
  
  export default Register