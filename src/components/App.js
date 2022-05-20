import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
// import Cast from './MovieDetailsPage/Cast/Cast';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Reviews from './MovieDetailsPage/Reviews/Reviews';
import MoviesPage from './MoviesPage/MoviesPage';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import NotFound from './NotFound/NotFound';

export default function App() {
   return (
      <Container>
         <AppBar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
               {/* <Route path="/cast " element={<Cast />} />
               <Route path="/reviews " element={<Reviews />} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Container>
   );
}
