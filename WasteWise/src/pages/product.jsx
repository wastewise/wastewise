import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";

import CancelIcon from "@mui/icons-material/Cancel";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import Model from "./model";
import back from "/back.png";
import front from "/front.png";
import middle from "/middle.png";
import product from "/product.png";

import { caseText, mainText, structureText, systemText } from "../data/text";

const Product = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box
                    width="95%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Box
                        bgcolor="primary.dark"
                        p={4}
                        borderRadius="40px"
                        color="white"
                        height="70%"
                        width="70%"
                        position="relative">
                        <Model />
                        <CancelIcon
                            fontSize="large"
                            onClick={handleClose}
                            sx={{
                                top: "5%",
                                right: "5%",
                                position: "absolute",
                                cursor: "pointer",
                                color: "#dc3545",
                                transform: "scale(1.75)",
                            }}
                        />
                    </Box>
                </Box>
            </Modal>

            <Navbar />

            <Box
                bgcolor="primary.dark"
                display="flex"
                justifyContent="center"
                alignItems="center"
                pb={2}>
                <Box sx={{ width: { md: "100%", lg: "80%" } }}>
                    <Grid
                        container
                        sx={{ height: "100%" }}
                        bgcolor="primary.dark"
                        color="white">
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            md={6}
                            p={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                paddingLeft: { xs: 4, sm: 8, md: 6, lg: 6 },
                                paddingRight: { xs: 4, sm: 8, md: 6, lg: 6 },
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
                            md={6}
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
                                    <Box width="100%" pb={4}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                            }}>
                                            {mainText}
                                        </Typography>
                                    </Box>

                                    <Grid container width="100%">
                                        <Grid
                                            item
                                            xs={5}
                                            display="flex"
                                            alignItems="center">
                                            <Box
                                                bgcolor="secondary.main"
                                                width="180px"
                                                height="40px"
                                                borderRadius="40px"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center">
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        textDecoration: "none",
                                                    }}>
                                                    Price: $1500
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            ml={2}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={handleOpen}
                                                sx={{
                                                    borderRadius: "40px",
                                                    width: "180px",
                                                    height: "40px",
                                                }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        textDecoration: "none",
                                                    }}>
                                                    3D View
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
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
                                    <Box width="100%" pb={4}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                                textAlign: "center",
                                            }}>
                                            {mainText}
                                        </Typography>
                                    </Box>

                                    <Grid container width="100%">
                                        <Grid
                                            item
                                            xs={7}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            ml={-2}>
                                            <Box
                                                bgcolor="secondary.main"
                                                width="160px"
                                                height="40px"
                                                borderRadius="40px"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center">
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        textDecoration: "none",
                                                    }}>
                                                    Price: $1500
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={5}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            ml={2}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={handleOpen}
                                                sx={{
                                                    borderRadius: "40px",
                                                    width: "160px",
                                                    height: "40px",
                                                }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        textDecoration: "none",
                                                    }}>
                                                    3D View
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box
                bgcolor="primary.main"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Box sx={{ width: { md: "100%", lg: "60%" } }}>
                    <Grid
                        container
                        sx={{ height: "100%" }}
                        color="white"
                        py={2}>
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
                                        variant="h4"
                                        sx={{
                                            fontWeight: 900,
                                            letterSpacing: ".1rem",
                                        }}
                                        pb={2}>
                                        Case
                                    </Typography>
                                    <Box width="100%">
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                            }}>
                                            {caseText}
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
                                        }}
                                        pb={2}>
                                        Case
                                    </Typography>
                                    <Box width="100%">
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                                textAlign: "center",
                                            }}>
                                            {caseText}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            p={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                paddingLeft: { xs: 4, sm: 8, md: 16, lg: 8 },
                                paddingRight: { xs: 4, sm: 8, md: 16, lg: 8 },
                            }}>
                            <Box
                                component="img"
                                alt="front"
                                src={front}
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            height: "100%",
                        }}
                        color="white"
                        py={2}>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            p={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                paddingLeft: { xs: 4, sm: 8, md: 16, lg: 8 },
                                paddingRight: { xs: 4, sm: 8, md: 16, lg: 8 },
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "none",
                                    lg: "flex",
                                },
                            }}>
                            <Box
                                component="img"
                                alt="back"
                                src={back}
                                sx={{
                                    height: "100%",
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
                                        variant="h4"
                                        sx={{
                                            fontWeight: 900,
                                            letterSpacing: ".1rem",
                                        }}
                                        pb={2}>
                                        Structure
                                    </Typography>
                                    <Box width="100%">
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                            }}>
                                            {structureText}
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
                                        }}
                                        pb={2}>
                                        Structure
                                    </Typography>
                                    <Box width="100%">
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                                textAlign: "center",
                                            }}>
                                            {structureText}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            p={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                paddingLeft: { xs: 4, sm: 8, md: 16, lg: 8 },
                                paddingRight: { xs: 4, sm: 8, md: 16, lg: 8 },
                                display: {
                                    md: "flex",
                                    lg: "none",
                                },
                            }}>
                            <Box
                                component="img"
                                alt="back"
                                src={back}
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{ height: "100%" }}
                        color="white"
                        py={2}>
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
                                        variant="h4"
                                        sx={{
                                            fontWeight: 900,
                                            letterSpacing: ".1rem",
                                        }}
                                        pb={2}>
                                        Moving System
                                    </Typography>
                                    <Box width="100%">
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                            }}>
                                            {systemText}
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
                                        }}
                                        pb={2}>
                                        Moving System
                                    </Typography>
                                    <Box width="100%">
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textDecoration: "none",
                                                textAlign: "center",
                                            }}>
                                            {systemText}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            p={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                paddingLeft: { xs: 4, sm: 8, md: 16, lg: 8 },
                                paddingRight: { xs: 4, sm: 8, md: 16, lg: 8 },
                            }}>
                            <Box
                                component="img"
                                alt="middle"
                                src={middle}
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Footer bgcolor="primary.dark" />
        </>
    );
};

export default Product;
