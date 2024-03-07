import { Theme, ThemeContext } from "../lib/ThemeContext";
import { type FC, type ReactElement, useMemo, useState } from "react";
import { LOCAL_STORAGE } from "shared/const/localstorage";

interface ThemeProviderProps {
    children: string | ReactElement | ReactElement[]
}

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE.THEME_KEY) as Theme || Theme.LIGHT;
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
