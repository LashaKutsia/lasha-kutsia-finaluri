import type { AsyncCategoryState } from "../../helpers/sliceHelpers";
import type { Movie } from "../movies/types";

export type TvShow = Omit<Movie, 'original_title'> & {
    origin_country: string[];
    original_name: string;
};

export type TvShowsState = {
    tvShows: AsyncCategoryState<TvShow[]>;
};
