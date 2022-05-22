import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
   return (
      <nav className={s.nav}>
         <NavLink
            to="/goit-react-hw-05-movies"
            className={({ isActive }) =>
               isActive ? `${s.active}` : `${s.inactive}`
            }
         >
            Home
         </NavLink>
         <NavLink
            to="goit-react-hw-05-movies/movies"
            className={({ isActive }) =>
               isActive ? `${s.active}` : `${s.inactive}`
            }
         >
            Movies
         </NavLink>
      </nav>
   );
}
