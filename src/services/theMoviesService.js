import api from 'config/api';

export const getMovies = () => api.get('/discover/movie');
export const searchMovie = params => api.get('/search/movie', params);
