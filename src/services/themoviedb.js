const BASE_URL = 'https://api.themoviedb.org/3';
const MY_KEY = '2638d702e8992f774e165b094b88cb75';
export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

// https://api.themoviedb.org/3/movie/550?api_key=2638d702e8992f774e165b094b88cb75
async function fetchWithErrorHandling(url = '', config = {}) {
   const response = await fetch(url, config);
   return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}

export function fetchTrending(page = 1) {
   // https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
   return fetchWithErrorHandling(
      `${BASE_URL}/trending/all/day?api_key=${MY_KEY}&page=${page}`
   );
}

export function fetchSearchMovie(query, page = 1) {
   // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=df&page=1&include_adult=false
   return fetchWithErrorHandling(
      `${BASE_URL}/search/movie?api_key=${MY_KEY}&language=en-US&query=${query}&page=1&include_adult=true&page=${page}`
   );
}

export function fetchMovieDetailsById(id) {
   // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
   return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${MY_KEY}`);
}
export function fetchMovieCreditsById(id) {
   // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
   return fetchWithErrorHandling(
      `${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=en-US`
   );
}
export function fetchMovieReviewsById(id) {
   // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
   return fetchWithErrorHandling(
      `${BASE_URL}/movie/${id}/reviews?api_key=${MY_KEY}&language=en-US`
   );
}
