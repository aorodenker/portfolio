import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { useState, useEffect, Suspense } from 'react';
import { starAssets } from './Utils/starAssets.js';
import Planets from './components/Planets';
import TextDisplay from './components/TextDisplay';
import Navigation from './components/Navigation';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [content, setContent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [controls, setControls] = useState(true);

  useEffect(() => {
    selected === 0 ? setControls(true) : setControls(false);
  }, [selected]);

  return(
    <>
    <Navigation setSelected={setSelected} setContent={setContent} setHidden={setHidden} />
    <Canvas camera={{ fov: 50, near: 0.1, far: 5000, position: [-157, 151, -139] }} >
      <Suspense fallback={null}>
        <OrbitControls makeDefault enableRotate={controls} />
        <pointLight color="white" position={[0, 0, 0]} intensity={1} distance={2000} />
        <ambientLight intensity={0.05} />
        <Environment background files={[...starAssets]} blur={0.2} />
        <Planets selected={selected} />
      </Suspense>
    </Canvas>
    <Loader />
    <TextDisplay content={content} hidden={hidden} setHidden={setHidden} />
    </>
  );
};

export default App;