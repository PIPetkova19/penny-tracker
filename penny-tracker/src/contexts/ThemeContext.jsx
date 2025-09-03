import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    //vzima sist nastroiki na potrebitelq
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(prefersDarkMode);

    const customTheme = createTheme({
        palette: {
            mode: mode ? "dark" : "light",
            background: {
                default: mode ? "#121212" : "#ffe0e6",
                paper: mode ? "rgba(22, 22, 22, 1)" : "#f9e2e7ff"
            },
            text: {
                primary: mode ? "#fff" : "#ff5072",
                secondary: mode ? "rgba(255, 255, 255, 0.7)" : "#af9688"
            },
            buttons: {
                active: mode ? "#fff" : "#ffb1c0",
                hover: mode ? "rgba(255, 255, 255, 0.08)" : "#ff0000ff",
                selected: mode ? "rgba(255, 255, 255, 0.16)" : "#ff0000ff"
            },

            customColor: "#ff5072"
        }
    });

    function handleChangeSwitch() {
        if (mode) {
            setMode(false);
        }
        else {
            setMode(true);
        }
    }

    //!!! {{}} ako e povece ot edna promenliva
    return (
        <ThemeContext value={{ mode, handleChangeSwitch }}>
            <MuiThemeProvider theme={customTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext>
    );
}