import React from 'react';
import { URL_IMG, fetchMovieDetailsById } from '../../services/themoviedb';
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import './MovieDetailsPage.css';

export default function MovieDetailsPage() {
   const { pathname } = useLocation();
   const { movieId } = useParams();
   const [movie, setMovie] = useState(null);

   useEffect(() => {
      fetchMovieDetailsById(movieId).then(setMovie);
   }, [movieId]);

   return (
      <div>
         {movie && (
            <div className="movie">
               <img
                  src={URL_IMG + movie.poster_path}
                  alt={movie.title || movie.name}
                  width="300"
               />
               <div className="Info">
                  <h2 className="title">{movie.title || movie.name}</h2>
                  <p>User Score: {movie.vote_average}</p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h3>Genres</h3>
                  <p>{movie.genres.map(genr => genr.name).join(' / ')}</p>
               </div>
            </div>
         )}
         <hr />
         <nav>
            <Link to="cast">Cast</Link>
            <Link to={`${pathname}/reviews`}>Reviews</Link>
         </nav>
         <Outlet />
      </div>
   );
}
