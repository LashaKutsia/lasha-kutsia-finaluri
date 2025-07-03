import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../..//hooks';
import { fetchMovies } from '../../features/movies/moviesThunks';
import type { RootState } from '../../app/store';
import type { Movie } from "../../features/movies/types";
import { Card, MoviesContainer, PageContainer } from "../../components/common";

const DiscoverMovies: FC = () => {
    const dispatch = useAppDispatch();
    const { data: movies } = useAppSelector((state: RootState) => state.movies.discover);


    useEffect(() => {
        dispatch(fetchMovies(1));
    }, []);

    return (
        <div>
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
        </div>
    );
};

export default DiscoverMovies;
