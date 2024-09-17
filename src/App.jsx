import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import { div } from "three/webgpu";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2  -translate-x-1/2">
      {[
        "iPhone",
        "services",
        "ios",
        "mac",
        "products",
        "iPhone",
        "services",
        "ios",
        "mac",
        "products",
      ].map((e)=> (
        <a href="" className="text-white text-md font-[400]">{e}</a>
      ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-24 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-bold">
          macbook pro.
        </h3>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
