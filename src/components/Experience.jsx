import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import Headphones from "./Headphones";

const Experience = () => {
    return (
      <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}>
      <Stage environment={null} intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
          <Headphones/> 
        </Suspense>
      </Stage>
    </PresentationControls>
    );
};

export default Experience;