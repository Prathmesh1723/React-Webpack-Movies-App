import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './../App.scss'

const Landing = (props) =>{
    
    return(
            <div>
                <h1 className='heading2'>Movie List:</h1>
                <div className='image-grid image-container'>
                {props.movielist.map((movie, index)=>(
                    <div key={index} className='movie-item'>
                        <Link to={`/movie/details/${movie.imdbID}`}>
                        <div className='movie-poster-container'>
                            <img src={movie.Poster} alt={movie.Title} className='movie-poster' />
                            <div className='movie-title-overlay'>{movie.Title}</div>
                        </div>
                        </Link>
                        {/* <div className='title movie-title-overlay'>{movie.Title}</div> */}
                    </div>
                ))}
                </div>
            </div>
    )
}

export default Landing;
