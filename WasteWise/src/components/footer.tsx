import { Box, Button, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../assets/logo.png";

const links = [
    "https://www.instagram.com/",
    "https://www.facebook.com/",
    "https://www.gmail.com/",
    "",
];

const Footer = () => {
    const handleButtonClick = (pageURL: string) => {
        window.open(pageURL, "_blank");
    };

    return (
        <Box
            bgcolor="primary.main"
            sx={{ height: "100%", width: "100%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={3}>
            <Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        alt="logo"
                        src={logo}
                        color="white"
                        sx={{
                            height: "50px",
                        }}
                        mr={2}
                    />
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ minHeight: "100%" }}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontFamily: "monospace",
                                fontWeight: 900,
                                letterSpacing: ".25rem",
                                color: "white",
                                textDecoration: "none",
                            }}>
                            WASTEWISE
                        </Typography>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    my={2}
                    sx={{
                        minHeight: "100%",
                        flexGrow: 1,
                    }}>
                    <InstagramIcon
                        onClick={() => handleButtonClick(links[0])}
                        sx={{
                            ml: 2,
                            cursor: "pointer",
                        }}></InstagramIcon>
                    <FacebookIcon
                        onClick={() => handleButtonClick(links[1])}
                        sx={{
                            ml: 2,
                            cursor: "pointer",
                        }}></FacebookIcon>
                    <EmailIcon
                        onClick={() => handleButtonClick(links[2])}
                        sx={{
                            ml: 2,
                            cursor: "pointer",
                        }}></EmailIcon>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleButtonClick(links[3])}
                        sx={{
                            marginLeft: "1rem",
                            borderRadius: "20px",
                        }}>
                        <Typography
                            sx={{
                                mx: 1,
                                fontWeight: 800,
                                textDecoration: "none",
                                fontFamily: "monospace",
                                letterSpacing: ".1rem",
                            }}>
                            CONCTACT
                        </Typography>
                    </Button>
                </Box>
                <Box>
                    <Typography
                        color="white"
                        mt={2}
                        px={2}
                        sx={{ textAlign: "center", letterSpacing: "-0.05rem" }}>
                        2023 WasteWise, Brasov, Romania. Made with ❤️ by CNI
                        "Grigore Moisil"
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
