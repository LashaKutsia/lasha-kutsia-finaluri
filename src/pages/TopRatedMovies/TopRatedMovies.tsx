import { Card, MoviesContainer, PageContainer } from "../../components/common";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchTopRatedMovies } from "../../features/movies/moviesThunks";
import type { Movie } from "../../features/movies/types";

const TopRatedMovies = () => {
    const dispatch = useAppDispatch();
    const { data: movies } = useAppSelector((state) => state.movies.topRated);


    useEffect(() => {
        dispatch(fetchTopRatedMovies(1));
    }, []);

    return (
        <PageContainer>
            <MoviesContainer>
                {movies?.map((movie: Movie) => (
                    <Card
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

export default TopRatedMovies;
