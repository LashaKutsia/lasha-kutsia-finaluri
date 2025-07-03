import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : defaultValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error)
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}
