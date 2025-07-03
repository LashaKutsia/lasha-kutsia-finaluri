import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tvShowRequests from './tvApi';

export const fetchTvShows = createAsyncThunk(
    'tvShows/',
    async (page: number, thunkAPI) => {
        try {
            return await tvShowRequests.getTvShows(page);
        } catch (error) {
            return thunkAPI.rejectWithValue('Could not fetch tv shows')
        }
    }
);
