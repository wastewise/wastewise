import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { links } from "../data/links";

// import logo from "/wastewise/logo.png";

const pages = ["Produs", "AI Demo"];

const Navbar = () => {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleButtonClick = (pageURL) => {
        window.open(pageURL, "_blank");
    };

    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container>
                        <Grid item xs={9} sm={5} md={5} p={2.5}>
                            <Box
                                sx={{ height: "100%", cursor: "pointer" }}
                                display="flex"
                                justifyContent="center"
                                onClick={() => navigate("/wastewise")}
                                alignItems="center">
                                <Box
                                    component="img"
                                    alt="logo"
                                    src={"/wastewise/logo.png"}
                                    color="white"
                                    sx={{
                                        height: "35px",
                                    }}
                                    mr={1}
                                />
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        minHeight: "100%",
                                    }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: "monospace",
                                            fontWeight: 900,
                                            letterSpacing: ".2rem",
                                            color: "inherit",
                                            textDecoration: "none",
                                        }}>
                                        WASTEWISE
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={0} sm={0} md={3}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ height: "100%" }}>
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: "none", md: "flex" },
                                    }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page}
                                            onClick={() =>
                                                navigate(
                                                    "/wastewise/" +
                                                        page.toLowerCase()
                                                )
                                            }
                                            // onClick={handleCloseNavMenu}
                                            sx={{
                                                color: "white",
                                                display: "block",
                                            }}>
                                            <Typography
                                                noWrap
                                                sx={{
                                                    mx: 1,
                                                    fontWeight: 800,
                                                    color: "inherit",
                                                    textDecoration: "none",
                                                    fontFamily: "monospace",
                                                    letterSpacing: ".1rem",
                                                }}>
                                                {page}
                                            </Typography>
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={0} sm={5} md={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    minHeight: "100%",
                                    flexGrow: 1,
                                    display: { xs: "none", sm: "flex" },
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
                                {/* <EmailIcon
                                    onClick={() => handleButtonClick(links[2])}
                                    sx={{
                                        ml: 2,
                                        cursor: "pointer",
                                    }}></EmailIcon> */}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleButtonClick(links[2])}
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
                        </Grid>

                        <Grid item xs={1} sm={1} md={0} mx={2}>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                    height: "100%",
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                {/* <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit">
                                    <MenuIcon />
                                </IconButton> */}
                                <Button
                                    variant="text"
                                    onClick={handleOpenNavMenu}>
                                    <Box>
                                        <Box
                                            bgcolor="white"
                                            height="3.5px"
                                            width="35px"
                                            borderRadius="20px"
                                            mb={0.8}
                                        />
                                        <Box
                                            bgcolor="white"
                                            height="3.5px"
                                            width="25px"
                                            ml="10px"
                                            borderRadius="20px"
                                            mb={0.8}
                                        />
                                        <Box
                                            bgcolor="white"
                                            height="3.5px"
                                            width="15px"
                                            ml="20px"
                                            borderRadius="20px"
                                        />
                                    </Box>
                                </Button>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                    }}>
                                    {pages.map((page) => (
                                        <MenuItem
                                            key={page}
                                            onClick={() =>
                                                navigate(
                                                    "/wastewise/" +
                                                        page.toLowerCase()
                                                )
                                            }>
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
