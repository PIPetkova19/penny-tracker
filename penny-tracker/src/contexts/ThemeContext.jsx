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
      default: mode 
        ? "rgba(255, 0, 0, 0.16)" 
        : "rgba(210, 20, 20, 1)"
    },
        text: {
      primary: mode ? "#ff1a1aff" : "#6c6c6cff",    
      secondary: mode ? "#aaaaaa" : "#555555",  
      customRed: "rgba(255,0,0,0.8)"          
    }
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