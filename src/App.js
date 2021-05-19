import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Recepie';
import Recepie from './Recepie';

function App() {
  const API_ID = '0a097a95';
  const API_KEY = '4903696334547c642d9ee470db4a2f48';
  // api key and user Id avilable


  // const [counter,setCounter]=useState(0);
  // const increment=()=>{
  // setCounter(counter+1);
  // };
  const [recepies, setRecepie] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  const upDateSearch = e => {
    setSearch(e.target.value);// e is the event. So we just set the target valuye of that event as our search bar
    console.log(search);
  }
  const getSearch = e => {
    e.preventDefault();//prevents page from rerendering everytime we make a change
    setQuery(search);
    setSearch("");
  }
  // const [isLoading,setLoading]=useState(false);


  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    //`` use backclicks to customize string
    const data = await response.json();
    console.log(data.hits);
    setRecepie(data.hits);
    // if(data.hits !=null) setLoading(true);
    // console.log(recepies);
  };

  useEffect(() => {
    
    getRecepies();
    // eslint-disable-next-line 
  }, [query]);


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={upDateSearch} placeholder="Search food" />
        {/* //value is the value from search state variable. and bu default we have set is "". we add an onChange listener todetech if any change has happend */}
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recepies">
      {
        recepies.map(rec => (
          <Recepie key={rec.recipe.calories} title={rec.recipe.label} calories={rec.recipe.calories} image={rec.recipe.image} ingredients={rec.recipe.ingredients} />
          // key bcz we need unique identifier for each item|
        ))

      };

</div>
    </div>
  );
}

export default App;