import type { ReactNode } from "react";
import './MoviesContainer.scss';

const MoviesContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className='movies'>
            {children}
        </div>
    );
};

export default MoviesContainer;
