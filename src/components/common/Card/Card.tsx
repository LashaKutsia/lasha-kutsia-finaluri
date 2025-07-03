import type { CardProps } from "./types.ts";
import './Card.scss';

const Card = ({ title, poster_path, release_date, vote_average } : CardProps) => {
    return (
        <div className="movie-card" >
            <div className="poster-wrapper">
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="poster"
                />
                <div className="rating">{vote_average.toFixed(1)}</div>
            </div>
            <div className="info">
                <h3 className="title">{title}</h3>
                <p className="release-date">{release_date}</p>
            </div>
        </div>
    );
};

export default Card;
