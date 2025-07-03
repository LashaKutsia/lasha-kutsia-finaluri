import { createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesRequests from './moviesApi';

export const fetchMovies = createAsyncThunk(
    'movies/discover',
    async (page: number = 1, thunkAPI) => {
        try {
            return await moviesRequests.getMovies(page);
        } catch (error) {
            return thunkAPI.rejectWithValue('Could not fetch movies');
        }
    }
);

export const fetchPopularMovies = createAsyncThunk(
    'movies/popular',
    async (page: number = 1, thunkAPI) => {
        try {
            return await moviesRequests.getPopularMovies(page);
        } catch (error) {
            return thunkAPI.rejectWithValue('Could not fetch popular movies');
        }
    }
);

export const fetchTopRatedMovies = createAsyncThunk(
    'movies/topRated',
    async (page: number = 1, thunkAPI) => {
        try {
            return await moviesRequests.getTopRatedMovies(page);
        } catch (error) {
            return thunkAPI.rejectWithValue('Could not fetch top rated movies');
        }
    }
);
