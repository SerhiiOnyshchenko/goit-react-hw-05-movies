import PageHeading from 'components/PageHeading/PageHeading';
import { fetchTrending } from '../../services/themoviedb';
import { useState, useEffect } from 'react';
import Loader from './../Loader/Loader';
import Button from './../Button/Button';
import Scrollup from './../Scrollup/Scrollup';
import * as Scroll from 'react-scroll';
import MoviesGallery from './../MoviesGallery/MoviesGallery';

export default function HomePage() {
   const [moviesList, setMoviesList] = useState([]);
   const [countPage, setCountPage] = useState(1);
   const [showLoadMore, setShowLoadMore] = useState(true);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setShowLoadMore(false);
      setLoading(true);
      fetchTrending(countPage).then(date => {
         setMoviesList(prev => [...prev, ...date.results]);
         setLoading(false);
         setShowLoadMore(true);
      });
   }, [countPage]);

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
         <PageHeading text={'Trending today'} />
         <MoviesGallery moviesList={moviesList} />
         {loading && <Loader />}
         {showLoadMore && <Button onClick={onloadeMore} title="Load more" />}
         <Scrollup />
      </div>
   );
}
