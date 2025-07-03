import { Card, MoviesContainer, PageContainer } from "../../components/common";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchTvShows } from "../../features/tv/tvThunks";

const TvShows = () => {

    const dispatch = useAppDispatch();
    const { data: tvShows } = useAppSelector((state) => state.tvShows.tvShows);


    useEffect(() => {
        dispatch(fetchTvShows(1));
    }, []);
    return (
        <PageContainer>
            <MoviesContainer>
                {tvShows?.map((movie) => (
                    <Card
                        poster_path={movie.poster_path}
                        release_date={''}
                        title={movie.original_name}
                        vote_average={movie.vote_average}
                    />
                ))}
            </MoviesContainer>
        </PageContainer>
    );
};

export default TvShows;
