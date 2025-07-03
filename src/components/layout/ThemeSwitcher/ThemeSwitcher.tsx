import { useTheme } from "../../../context/ThemeContext";
import "./ThemeSwitcher.scss"; // optional for styling

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="theme-switcher button" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};

export default ThemeSwitcher;
