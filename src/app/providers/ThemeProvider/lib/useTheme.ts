import { Theme, ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";
import { useContext } from "react";
import { LOCAL_STORAGE } from "shared/const/localstorage";

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    document.documentElement.className = theme;
    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        if (setTheme) setTheme(newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE.THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
}
