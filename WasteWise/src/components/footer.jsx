import { Box, Button, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { links } from "../data/links";

import logo from "/logo.png";

const Footer = (props) => {
    const handleButtonClick = (pageURL) => {
        window.open(pageURL, "_blank");
    };

    return (
        <Box
            {...props}
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
                            height: "45px",
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
                            color: "white",
                        }}></InstagramIcon>
                    <FacebookIcon
                        onClick={() => handleButtonClick(links[1])}
                        sx={{
                            ml: 2,
                            cursor: "pointer",
                            color: "white",
                        }}></FacebookIcon>
                    {/* <EmailIcon
                        onClick={() => handleButtonClick(links[2])}
                        sx={{
                            ml: 2,
                            cursor: "pointer",
                            color: "white",
                        }}></EmailIcon> */}
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
                            Contactați
                        </Typography>
                    </Button>
                </Box>
                <Box>
                    <Typography
                        color="white"
                        mt={2}
                        px={2}
                        sx={{ textAlign: "center", letterSpacing: "-0.05rem" }}>
                        2023 WasteWise, Brașov, România. Făcut cu ❤️ de CNI
                        "Grigore Moisil"
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
