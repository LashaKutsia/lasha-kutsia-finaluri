import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchTvShows } from './tvThunks';
import { setError, setSuccess, setLoading } from '../../helpers/sliceHelpers';

import type { TvShow, TvShowsState } from "./types";
import type { MoviesApiResponse } from "../../types";

const initialState: TvShowsState = {
    tvShows: { loading: false, data: null, error: null },
};

const tvShowsSlice = createSlice({
    name: 'tvShows',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTvShows.pending, (state) => setLoading(state.tvShows))
            .addCase(fetchTvShows.fulfilled, (state, action: PayloadAction<MoviesApiResponse<TvShow>>) => setSuccess(state.tvShows, action.payload.results))
            .addCase(fetchTvShows.rejected, (state, action) => setError(state.tvShows, action.payload))
    },
});

export default tvShowsSlice.reducer;
