import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
   return (
      <nav>
         <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
         >
            Home
         </NavLink>
         <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
         >
            Movies
         </NavLink>
      </nav>
   );
}
