import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import Landing from './components/landing';
import MovieDetails from './components/details';
import SearchBar from './components/searchBar';

function App() {
  const [movielist, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const movieDetails = async () =>{
  const omdb_api = 'http://www.omdbapi.com/?apikey=4845c445&s=harry'

  const response = await fetch(omdb_api);
  const convertToJSON = await response.json();

  console.log(convertToJSON);
  setMovies(convertToJSON.Search);
  
};

useEffect(()=>{
  movieDetails();
},[]);

  return (
    <Router>
      <div className='mini-netflix'>
      <div className='movie-list-container'>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path='/' element={<Landing movielist={movielist}></Landing>}></Route>
          <Route path='/movie/details/:imdbID' element={<MovieDetails></MovieDetails>}></Route>
          <Route path='/movie/details/:imdbID' element={<MovieDetails></MovieDetails>}></Route>
          <Route path="/movie/details" element={<MovieDetails/>} />
        </Routes>
          
        </div>
    </div>
    </Router>
    
  );

}

export default App;
