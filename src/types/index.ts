export type MoviesApiResponse<T> = {
    pages: number;
    results: T[];
    total_pages: number;
    total_results: number
};
