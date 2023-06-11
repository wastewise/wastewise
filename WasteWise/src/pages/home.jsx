import { Box, Grid, Typography } from "@mui/material";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import product from "/product.png";

import { mainText } from "../data/text";

const Home = () => {
    return (
        <>
            <Navbar />

            <Box sx={{ minHeight: "100%" }}>
                <Box
                    bgcolor="secondary.main"
                    sx={{ height: "40vh", width: "100%" }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            minHeight: "100%",
                            // backgroundImage: `url(${background})`,
                            // filter: "blur(4px)",
                        }}>
                        <Box color="white">
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 900,
                                    letterSpacing: ".1rem",
                                    color: "inherit",
                                    textAlign: "center",
                                }}>
                                WASTEWISE
                            </Typography>
                            <Typography
                                variant="h5"
                                px={2}
                                sx={{
                                    textAlign: "center",
                                    fontWeight: 700,
                                }}>
                                Wise Sorting, Cleaner Future
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    width="100%"
                    bgcolor="primary.main"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    py={4}>
                    <Box sx={{ width: { md: "100%", lg: "80%" } }}>
                        <Grid container sx={{ height: "100%" }} color="white">
                            <Grid
                                item
                                xs={12}
                                lg={6}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                    paddingLeft: {
                                        xs: 4,
                                        sm: 8,
                                        md: 16,
                                        lg: 8,
                                    },
                                    paddingRight: {
                                        xs: 4,
                                        sm: 8,
                                        md: 16,
                                        lg: 8,
                                    },
                                }}>
                                <Box
                                    component="img"
                                    alt="product"
                                    src={product}
                                    sx={{
                                        borderRadius: "40px",
                                        height: "auto",
                                        width: "100%",
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={6}
                                px={8}
                                py={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "none",
                                            md: "none",
                                            lg: "flex",
                                        },
                                    }}>
                                    <Box width="100%">
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 900,
                                                letterSpacing: ".1rem",
                                            }}>
                                            WASTEBIN
                                        </Typography>
                                        <Box
                                            bgcolor="white"
                                            my={4}
                                            sx={{ height: "2px", width: "70%" }}
                                        />
                                        <Box width="100%">
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    textDecoration: "none",
                                                }}>
                                                {mainText}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{
                                        display: {
                                            md: "flex",
                                            lg: "none",
                                        },
                                    }}>
                                    <Box width="100%">
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 900,
                                                letterSpacing: ".1rem",
                                                textAlign: "center",
                                            }}>
                                            WASTEBIN
                                        </Typography>
                                        <Box
                                            bgcolor="white"
                                            mx="auto"
                                            my={4}
                                            sx={{ height: "2px", width: "70%" }}
                                        />
                                        <Box width="100%">
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    textDecoration: "none",
                                                    textAlign: "center",
                                                }}>
                                                {mainText}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box
                    py={8}
                    bgcolor={"primary.dark"}
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Box width="60%">
                        <Typography
                            variant="h4"
                            mb={2}
                            sx={{
                                fontWeight: 900,
                                letterSpacing: ".1rem",
                                textAlign: "center",
                            }}>
                            Our Possible Clients
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: "center" }}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                        </Typography>
                    </Box>
                </Box>

                <Footer bgcolor="primary.main" />
            </Box>
        </>
    );
};

export default Home;
