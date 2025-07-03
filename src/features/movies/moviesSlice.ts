import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchMovies, fetchPopularMovies, fetchTopRatedMovies } from './moviesThunks';
import { setError, setSuccess, setLoading } from '../../helpers/sliceHelpers';
import type { Movie, MoviesState } from "./types";
import type { MoviesApiResponse } from "../../types";

const initialState: MoviesState = {
    discover: { loading: false, data: null, error: null },
    popular: { loading: false, data: null, error: null },
    topRated: { loading: false, data: null, error: null },
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMovies.pending, (state) => setLoading(state.discover))
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MoviesApiResponse<Movie>>) =>
                setSuccess(state.discover, action.payload.results)
            )
            .addCase(fetchMovies.rejected, (state, action) =>
                setError(state.discover, action.payload)
            )

            .addCase(fetchPopularMovies.pending, (state) => setLoading(state.popular))
            .addCase(fetchPopularMovies.fulfilled, (state, action: PayloadAction<MoviesApiResponse<Movie>>) =>
                setSuccess(state.popular, action.payload.results)
            )
            .addCase(fetchPopularMovies.rejected, (state, action) =>
                setError(state.popular, action.payload)
            )

            .addCase(fetchTopRatedMovies.pending, (state) => setLoading(state.topRated))
            .addCase(fetchTopRatedMovies.fulfilled, (state, action: PayloadAction<MoviesApiResponse<Movie>>) =>
                setSuccess(state.topRated, action.payload.results)
            )
            .addCase(fetchTopRatedMovies.rejected, (state, action) =>
                setError(state.topRated, action.payload)
            );
    },
});

export default moviesSlice.reducer;
