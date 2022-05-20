import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../../services/themoviedb';
import Searchbar from './../Searchbar/Searchbar';
import Loader from './../Loader/Loader';
import Button from './../Button/Button';
import Scrollup from './../Scrollup/Scrollup';
import MoviesGallery from './../MoviesGallery/MoviesGallery';
import * as Scroll from 'react-scroll';
import Notiflix from 'notiflix';

export default function MoviesPage() {
   const [searchName, setSearchName] = useState('');
   const [countPage, setCountPage] = useState(1);
   const [moviesList, setMoviesList] = useState([]);
   const [showLoadMore, setShowLoadMore] = useState(false);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (!searchName) {
         return;
      }
      setShowLoadMore(false);
      setLoading(true);
      fetchSearchMovie(searchName, countPage)
         .then(date => {
            setMoviesList(prev => [...prev, ...date.results]);
            setLoading(false);
            console.log(date);
            if (date.total_results !== date.results.length) {
               setShowLoadMore(true);
            }
            if (countPage === 1) {
               Notiflix.Notify.success(
                  `Hooray! We found ${date.total_results} movies.`
               );
            }
            if (date.total_results <= countPage * 20) {
               setShowLoadMore(false);
               Notiflix.Notify.info(
                  "We're sorry, but you've reached the end of search results."
               );
            }
         })
         .catch(onApiError);
   }, [countPage, searchName]);
   console.log(moviesList);
   const onApiError = () => {
      Notiflix.Notify.failure(
         'Sorry, there are no movies matching your search query. Please try again.'
      );
      setShowLoadMore(false);
      setLoading(false);
   };

   const onSubmit = name => {
      if (!name) {
         Notiflix.Notify.failure('Please. Enter the name of the movie.');
         setShowLoadMore(false);
      }
      if (searchName === name && countPage === 1) {
         return;
      }
      setSearchName(name);
      setCountPage(1);
      setMoviesList([]);
   };
   const onloadeMore = () => {
      setCountPage(prev => prev + 1);
      scrollSlowly();
   };

   const scrollSlowly = () => {
      const { height: cardHeight } = document
         .querySelector('#MoviesGallery')
         .firstElementChild.getBoundingClientRect();
      Scroll.animateScroll.scrollMore(cardHeight * 2);
   };
   return (
      <div>
         <Searchbar onSubmit={onSubmit} />
         <MoviesGallery moviesList={moviesList} />
         {loading && <Loader />}
         {showLoadMore && <Button onClick={onloadeMore} title="Load more" />}
         <Scrollup />
      </div>
   );
}
