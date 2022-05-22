import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { useLocation } from 'react-router-dom';

export default function Searchbar({ onSubmit }) {
   const { state } = useLocation();
   const [value, setValue] = useState(
      window.location.search.split('=')[1] || ''
   );

   useEffect(() => {
      if (state) {
         setValue(state);
         return;
      }
      setValue('');
   }, [state]);

   const onFormSubmit = e => {
      e.preventDefault();
      onSubmit(value);
   };

   return (
      <div className={s.Searchbar}>
         <form className={s.SearchForm} onSubmit={onFormSubmit}>
            <input
               className={s.SearchFormInput}
               type="text"
               autoComplete="off"
               autoFocus={true}
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder="Search movies"
            />
         </form>
      </div>
   );
}

Searchbar.propTypes = {
   onSubmit: PropTypes.func.isRequired,
};
