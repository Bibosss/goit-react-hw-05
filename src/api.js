import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2UxZDViMzczMWY1NzNhYjZiYzNjYjk4ZWUzM2JiYyIsIm5iZiI6MTczODc4MzI3My40NDksInN1YiI6IjY3YTNiYTI5YWNhOTFkYTRiYTg1OWIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DSsLHfLEwpHLaUyAdMYacj9RK_R9zUOGSJ_49zF0swQ";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
};

export const getTrendMovies = async () => {
    const response = await axios.get('trending/movie/day', options);
    return response.data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}`, options);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits`, options);
    return response.data.cast;
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews`, options);
    return response.data.results;
}

export const getMovieSearch = async (query) => {
    const response = await axios.get(`search/movie?query=${query}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
    return response.data.results;
};