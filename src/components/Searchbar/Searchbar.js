import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
   const [value, setValue] = useState('');

   const onFormSubmit = e => {
      e.preventDefault();
      onSubmit(value);
      setValue('');
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
