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
  const [error, setError] = useState(null)

  useEffect(() => {
    if (searchRes) {
      axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchRes}`)
        .then(response => {
          if (response.data.Response === 'True') {
            setMovie(response.data.Search)
          } else if (response.data.Response === 'False'){
            setError(response.data.Error)
          }
        })
        .catch(err => setError(err.message))
    } else {
      axios.get(Base_URL)
        .then(response => {
          setMovie(response.data.Search)
        })
        .catch(err => setError(err.message))
    }
  }, [searchRes])

  return (
    <MovieContext.Provider value={{ movie, searchRes, setSearchRes, error }}>
      <div className={classes.app}>
        <Header />
        <Main />
        <Footer />
      </div>
    </MovieContext.Provider>
  );
}

export default App;