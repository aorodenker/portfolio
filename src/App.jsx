import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { Perf } from 'r3f-perf';
import { starAssets } from './Utils/starAssets.js';
import Planets from './components/Planets';
import TextDisplay from './components/TextDisplay';
import Navigation from './components/Navigation';

const App = () => {
  const orbitRef = useRef();
  const [selected, setSelected] = useState(0);
  const [content, setContent] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (orbitRef.current && selected === 0) {
      orbitRef.current.update();
    };
  }, [selected]);

  return(
    <>
    <Navigation setSelected={setSelected} setContent={setContent} setHidden={setHidden} />
    <Canvas
      shadows={true}
      camera={{
        fov: 50,
        near: 0.1,
        far: 5000,
        position: [-157, 151, -139],
      }}
    >
      {/* <Perf position="top-left" /> */}
      <OrbitControls ref={orbitRef} makeDefault />
      <pointLight color="white" position={[0, 0, 0]} intensity={1} distance={3000} />
      <ambientLight intensity={0.05} />

      <Environment background files={[...starAssets]} blur={0.2} />
      <Planets selected={selected} setSelected={setSelected} />
    </Canvas>
    <TextDisplay content={content} setContent={setContent} hidden={hidden} setHidden={setHidden} />
    </>
  );
};

export default App;