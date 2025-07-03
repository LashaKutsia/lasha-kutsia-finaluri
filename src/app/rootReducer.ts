import { combineReducers } from "redux";
import { moviesReducer, tvShowsReducer } from '../features'

const rootReducer = combineReducers({
    movies: moviesReducer,
    tvShows: tvShowsReducer,
});

export default rootReducer;
