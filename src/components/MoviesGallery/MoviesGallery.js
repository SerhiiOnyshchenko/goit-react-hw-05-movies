import React from 'react';
import { URL_IMG } from '../../services/themoviedb';
import { Link } from 'react-router-dom';
import s from './MoviesGallery.module.css';
import gefaultImg from '../../images/default-movie.png';

export default function MoviesGallery({ moviesList }) {
   return (
      <ul id="MoviesGallery" className={s.MovieGrid}>
         {moviesList.map(({ id, title, name, poster_path }) => (
            <li key={id} className={s.Item}>
               <Link to={`/movies/${id}`} className={s.Link}>
                  <img
                     className={s.Img}
                     src={poster_path ? URL_IMG + poster_path : gefaultImg}
                     alt={title || name}
                  />
                  <p className={s.title}>{title || name}</p>
               </Link>
            </li>
         ))}
      </ul>
   );
}
