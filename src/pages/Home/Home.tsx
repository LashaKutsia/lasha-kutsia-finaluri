import {
    Card,
    MoviesContainer,
    PageContainer,
    Slider
} from "../../components/common";
import { useEffect } from "react";
import {
    fetchMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
} from "../../features/movies/moviesThunks.ts";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { useTranslation } from "react-i18next";
import type { Movie } from "../../features/movies/types.ts";

const Home = () => {

    const dispatch = useAppDispatch();
    const { discover, popular, topRated } = useAppSelector((state) => state.movies);
    const { t } = useTranslation();

    useEffect(() => {
        if (!discover?.data?.length) {
            dispatch(fetchMovies(1));

        }
        if (!popular?.data?.length) {
            dispatch(fetchTopRatedMovies(1));
        }
        if (!topRated?.data?.length) {
            dispatch(fetchPopularMovies(1));
        }
    }, []);

    return (
        <PageContainer>
            {discover?.data?.length ? (
                <MoviesContainer >
                    {discover.data.slice(0, 20).map((movie) => (
                        <Card
                            key={movie.id}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            title={movie.title}
                            vote_average={movie.vote_average}
                        />
                    ))}
                </MoviesContainer>

            ) : <></>}
            {popular?.data?.length ? (
                <Slider title={t('popular')} >
                    {popular.data.map((movie: Movie) => (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            vote_average={movie.vote_average}
                        />
                    ))}
                </Slider>
            ) : <></>}
            {topRated?.data?.length ? (
                <Slider title={t('top-rated')} >
                    {topRated.data.map((movie: Movie) => (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            vote_average={movie.vote_average}
                        />
                    ))}
                </Slider>
            ) : <></>}
        </PageContainer>
    );
};

export default Home;
