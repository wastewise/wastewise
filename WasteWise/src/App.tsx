import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

const theme = createTheme({
    palette: {
        primary: {
            main: "#517360",
        },
        secondary: {
            main: "#538C51",
        },
    },
    typography: {
        fontFamily: "Paytone One, Arial, sans-serif",
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
