import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"; // your custom hook

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useLocalStorage<string>("theme", "light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const root = document.body;

        root.classList.remove("theme-light", "theme-dark");
        root.classList.add(`theme-${theme}`);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
