import type { Movie } from "../../../features/movies/types.ts";

export type CardProps = Omit<Movie,
    'original_title' |
    'adult' |
    'backdrop_path' |
    'genre_ids' |
    'id' |
    'original_language' |
    'overview' |
    'popularity' |
    'video' |
    'vote_count'
>;
