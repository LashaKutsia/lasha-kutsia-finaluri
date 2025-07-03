import { Card, MoviesContainer, PageContainer } from "../../components/common";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchPopularMovies } from "../../features/movies/moviesThunks.ts";
import type { Movie } from "../../features/movies/types.ts";

const PopularMovies = () => {
    const dispatch = useAppDispatch();
    const { data: movies } = useAppSelector((state) => state.movies.popular);


    useEffect(() => {
        dispatch(fetchPopularMovies(1));
    }, []);

    return (
        <PageContainer>
            <MoviesContainer>
                {movies?.map((movie: Movie) => (
                    <Card
                        key={movie.id}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                        title={movie.title}
                        vote_average={movie.vote_average}
                    />
                ))}
            </MoviesContainer>
        </PageContainer>
    );
};

export default PopularMovies;
