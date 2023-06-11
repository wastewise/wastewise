import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AI from "./pages/ai";
import Home from "./pages/home";
import Product from "./pages/product";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2c2c2c",
            dark: "#1e1e1e",
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
                    <Route path="/" element={<Home />} />
                    <Route path="/wastewise" element={<Home />} />
                    <Route path="/wastewise/ai" element={<AI />} />
                    <Route path="/wastewise/product" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
