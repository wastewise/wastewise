import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Navbar from "../components/navbar";

const Model = () => {
    const { scene } = useGLTF("/wasteBin.glb", true);
    return <primitive scale={0.01} object={scene} />;
};

const Product = () => {
    return (
        <>
            <Navbar />

            <Canvas
                dpr={0.5}
                camera={{ fov: 45 }}
                style={{ position: "absolute", height: "90%" }}>
                <PresentationControls speed={1.5} global zoom={1}>
                    <Stage environment={undefined}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </>
    );
};

export default Product;
