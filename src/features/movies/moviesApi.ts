import api from "../../lib/axiosConfig";

export const getMovies = async (page: number = 1) => {
    const response = await api.get(`/discover/movie?include_adult=false&include_video=false?page=${page}`);
    return response.data;
};

export const getPopularMovies = async (page: number = 1) => {
    const response = await api.get(`/movie/popular?page=${page}`);
    return response.data;
};

export const getTopRatedMovies = async (page: number = 1) => {
    const response = await api.get(`/movie/top_rated?language=en-US&page=${page}`);
    return response.data
};
