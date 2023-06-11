import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import CameraswitchIcon from "@mui/icons-material/Cameraswitch";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import Waste from "../data/waste";

const URL = "http://localhost:5000/api/ai";

const AI = () => {
    const webcamRef = useRef(null);
    const [cameraFacing, setCameraFacing] = useState("environment");
    const [trashType, setTrashType] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const screenshot = webcamRef.current.getScreenshot();
            // console.log(screenshot);
            axios
                .post(URL, { image: screenshot })
                .then((response) => {
                    console.log("Image uploaded successfully");
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                const parsedInt = parseInt(response.data);
                setTrashType(parsedInt);
            })
            .catch((error) => {
                console.error("Error retrieving integer:", error);
            });
    }, []);

    return (
        <>
            <Navbar />

            <Box bgcolor="primary.dark" sx={{ height: "100%" }}>
                <Typography variant="h4" align="center" color="white" p={4}>
                    AI Model for Waste Detecting
                </Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    sx={{ height: "100%" }}>
                    <Webcam
                        width="90%"
                        height="auto"
                        audio={false}
                        ref={webcamRef}
                        videoConstraints={{
                            facingMode: cameraFacing,
                        }}
                        style={{
                            maxWidth: "800px",
                        }}
                    />
                    <Box
                        position="absolute"
                        width="90%"
                        height="100%"
                        sx={{ maxWidth: "800px" }}>
                        <CameraswitchIcon
                            sx={{
                                cursor: "pointer",
                                color: "white",
                                position: "absolute",
                                right: "2%",
                                top: "2%",
                            }}
                            fontSize="large"
                            onClick={() => {
                                if (cameraFacing === "environment")
                                    setCameraFacing("user");
                                else setCameraFacing("environment");
                            }}
                        />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Typography
                        variant="h5"
                        align="center"
                        color="white"
                        pt={4}>
                        Detected Waste:
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color={Waste[trashType].color}
                        pt={4}
                        ml={1}>
                        {Waste[trashType].type}
                    </Typography>
                </Box>
                <Typography variant="h6" align="center" color="white" p={4}>
                    This is a demo of our AI model for detecting waste. It is
                    currently in development and will be available soon.
                </Typography>
            </Box>

            <Footer bgcolor="primary.main" />
        </>
    );
};

export default AI;
