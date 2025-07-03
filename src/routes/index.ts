import type { RouteObject } from "./types";
import {Home, PopularMovies, TopRatedMovies, TvShows, DiscoverMovies } from '../pages';

const routesConfig: RouteObject[] = [
    { path: '/', element: Home },
    { path: '/popular', element: PopularMovies },
    { path: '/top-rated', element: TopRatedMovies },
    { path: '/tv-shows', element: TvShows },
    { path: '/discover-movies', element: DiscoverMovies }

];

export default routesConfig
