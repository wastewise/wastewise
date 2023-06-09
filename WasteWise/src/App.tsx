import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2c2c2c",
        },
        secondary: {
            main: "#538C51",
        },
    },
    typography: {
        fontFamily: "monospace",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/wastewise/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
