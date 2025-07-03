export type AsyncCategoryState<T> = {
    loading: boolean;
    data: T | null;
    error: string | null
};

export function setLoading<T>(state: AsyncCategoryState<T>) {
    state.loading = true;
    state.error = null;
    state.data = null;
}

export function setSuccess<T>(state: AsyncCategoryState<T>, data: T) {
    state.loading = false;
    state.error = null;
    state.data = data;
}

export function setError<T>(state: AsyncCategoryState<T>, error: unknown) {
    state.loading = false;
    state.error = error as string;
    state.data = null;
}
