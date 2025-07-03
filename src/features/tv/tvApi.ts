import api from "../../lib/axiosConfig";

export const getTvShows = async (page: number = 1) => {
    const response = await api.get(`/discover/tv?include_adult=false&include_null_first_air_dates=false&page=${page}`);
    return response.data;
};
