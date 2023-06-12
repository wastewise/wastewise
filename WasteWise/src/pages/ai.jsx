import { Box, Switch, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import CameraswitchIcon from "@mui/icons-material/Cameraswitch";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import Waste from "../data/waste";

const URL = "http://192.168.29.9:5000/predict";

const computeResponse = (data, setTrashType) => {
    // 'Aluminium', 'Carton', 'Glass', 'Organic Waste', 'Other Plastics', 'Paper and Cardboard', 'Plastic', 'Textiles', 'Wood'
    let max = -1, index = 0;
    for (let i = 0; i < data.length; i++)
        if (data[i] > max && data[i] > 0.5) {
            max = data[i];
            index = i;
        }

    if (max === -1)
        setTrashType(0);
    else
        setTrashType(index + 1);
}

const AI = () => {
    const webcamRef = useRef(null);
    const [cameraFacing, setCameraFacing] = useState("environment");
    const [trashType, setTrashType] = useState(0);
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (checked === false) {
            const screenshot = webcamRef.current.getScreenshot();
            if (screenshot === null)
                return;
            axios
                .post(URL, {image: screenshot.split(",")[1]})
                .then((response) => {
                    console.log("Image uploaded successfully");
                    console.log(response.data);
                    computeResponse(response.data[0], setTrashType);
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const sendImage = () => {
        const screenshot = webcamRef.current.getScreenshot();

        if (screenshot === null)
            return;

        axios
            .post(URL, {image: screenshot.split(",")[1]})
            .then((response) => {
                console.log("Image uploaded successfully");
                console.log(response.data);
                computeResponse(response.data[0], setTrashType);
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
            });
    }

    return (
        <>
            <Navbar />

            <Box bgcolor="primary.dark" sx={{ height: "100%" }}>
                <Typography variant="h4" align="center" color="white" p={4}>
                    Model AI pentru detectarea deșeurilor
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
                        screenshotFormat="image/jpeg"
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
                        <Switch
                            size="medium"
                            color="secondary" 
                            onChange={handleChange}
                            checked={checked}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{
                                cursor: "pointer",
                                position: "absolute",
                                left: "2%",
                                top: "2%",
                            }}
                        />
                        <Box 
                            position="absolute" 
                            bottom="5%"
                            left="45%"
                            display={checked === true ? "block" : "none"}>
                            <Box 
                                width="75px" 
                                height="75px" 
                                border="1px solid white" 
                                borderRadius="50%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center">
                                <Button 
                                    onClick={() => {sendImage()}}
                                    variant="contained" 
                                    color="secondary" 
                                    sx={{
                                        borderRadius: "50%", 
                                        position: "absolute", 
                                        width: "20px", 
                                        height: "63px"}} 
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Typography
                        variant="h5"
                        align="center"
                        color="white"
                        pt={4}>
                        Deșeu detectat:
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
                    Aceasta este o demonstrație a modelului nostru de AI pentru detectarea deșeurilor. Este
                    în prezent în dezvoltare și va fi disponibil în curând.
                </Typography>
            </Box>

            <Footer bgcolor="primary.main" />
        </>
    );
};

export default AI;
