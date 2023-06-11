import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Bin = () => {
    const { scene } = useGLTF("/wasteBin.glb", true);
    return <primitive scale={0.01} object={scene} />;
};

const Model = () => {
    return (
        <>
            <Canvas dpr={0.5} camera={{ fov: 45 }}>
                <PresentationControls speed={1.5} global zoom={1}>
                    <Stage environment={undefined}>
                        <Bin />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </>
    );
};

export default Model;
