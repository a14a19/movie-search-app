import classes from './App.module.scss';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieContext from './context/movie-context';

const Base_URL = 'https://www.omdbapi.com/?apikey=45f0782a&s=war'

function App() {
  const [movie, setMovie] = useState([])
  const [searchRes, setSearchRes] = useState('');
  
  useEffect(() => {
    if (searchRes) {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchRes}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then(response => {
          setMovie(response.data.results)
        })
    } else {
      axios.get(Base_URL).then(response => {
        setMovie(response.data.Search)
      })
    }
  }, [searchRes])

  return (
    <MovieContext.Provider value={{ movie, searchRes, setSearchRes }}>
      <div className={classes.app}>
        <Header searchRes={searchRes} setSearchRes={setSearchRes} />
        <Main movie={movie} searchRes={searchRes}/>
        <Footer />
      </div>
    </MovieContext.Provider>
  );
}

export default App;

// api = https://www.omdbapi.com/?apikey=45f0782a&s=war
