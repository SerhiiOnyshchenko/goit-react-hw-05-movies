import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import NotFound from './NotFound/NotFound';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('./HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
   import('./MovieDetailsPage/MovieDetailsPage.js')
);
const Cast = lazy(() => import('./MovieDetailsPage/Cast/Cast.js'));
const Reviews = lazy(() => import('./MovieDetailsPage/Reviews/Reviews.js'));

export default function App() {
   return (
      <Container>
         <AppBar />
         <Suspense fallback={<Loader />}>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="movies" element={<MoviesPage />} />
               <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<Cast />} />
                  <Route path="reviews" element={<Reviews />} />
               </Route>
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Suspense>
      </Container>
   );
}
