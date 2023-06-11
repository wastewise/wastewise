import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Navbar from "../components/navbar";

const Model = (props: any) => {
    const { scene } = useGLTF("/wasteBin.glb", true);
    return <primitive object={scene} {...props} />;
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
                        <Model scale={0.01} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </>
    );
};

export default Product;
