import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Toolbar,
    Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../assets/logo.png";

const pages = ["Product", "AI", "Support"];
const links = [
    "https://www.instagram.com/",
    "https://www.facebook.com/",
    "https://www.gmail.com/",
];

const Navbar = () => {
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    //     null
    // );

    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleButtonClick = (pageURL: string) => {
        window.open(pageURL, "_blank");
    };

    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container>
                        <Grid item xs={12} md={5} p={2}>
                            <Box
                                sx={{ height: "100%" }}
                                display="flex"
                                justifyContent="center"
                                alignItems="center">
                                <Box
                                    component="img"
                                    alt="logo"
                                    src={logo}
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
                                    sx={{ minHeight: "100%" }}>
                                    <Typography
                                        variant="h5"
                                        component="a"
                                        href="/"
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

                        <Grid item xs={0} md={3}>
                            {/* <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit">
                                    <MenuItem />
                                </IconButton>
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
                                            onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box> */}

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center">
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: "none", md: "flex" },
                                    }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page}
                                            // onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
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

                        <Grid item xs={0} md={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    minHeight: "100%",
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
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
                                        noWrap
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
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
