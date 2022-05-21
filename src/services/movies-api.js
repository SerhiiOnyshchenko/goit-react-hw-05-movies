const BASE_URL = 'https://api.themoviedb.org/3';
const MY_KEY = '2638d702e8992f774e165b094b88cb75';

export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
   const response = await fetch(url, config);
   return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}

export function fetchTrending(page = 1) {
   return fetchWithErrorHandling(
      `${BASE_URL}/trending/all/day?api_key=${MY_KEY}&page=${page}`
   );
}

export function fetchSearchMovie(query, page = 1) {
   return fetchWithErrorHandling(
      `${BASE_URL}/search/movie?api_key=${MY_KEY}&language=en-US&query=${query}&page=1&include_adult=false&page=${page}`
   );
}

export function fetchMovieDetailsById(id) {
   return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${MY_KEY}`);
}

export function fetchMovieCreditsById(id) {
   return fetchWithErrorHandling(
      `${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=en-US`
   );
}

export function fetchMovieReviewsById(id) {
   return fetchWithErrorHandling(
      `${BASE_URL}/movie/${id}/reviews?api_key=${MY_KEY}&language=en-US`
   );
}
