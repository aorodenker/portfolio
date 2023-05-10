import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { useState, useEffect, Suspense } from 'react';
import { starAssets } from './Utils/starAssets.js';
import Planets from './components/Planets';
import TextDisplay from './components/TextDisplay';
import Navigation from './components/Navigation';
import Controls from './components/Controls';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [content, setContent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [controls, setControls] = useState(true);
  const [reset, setReset] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  useEffect(() => {
    selected < 1 ? setControls(true) : setControls(false);
  }, [selected]);

  const planetHandler = (planet) => {
    setSelected(planet);
    setReset(!reset);
    setHidden(true);
  };

  return(
    <>
    <Navigation planetHandler={planetHandler} content={content} setContent={setContent} setHidden={setHidden} setNavCollapsed={setNavCollapsed} />
    <Canvas camera={{ fov: 50, near: 0.1, far: 5000, position: [-157, 151, -139] }} >
      <Suspense fallback={null}>
        <OrbitControls makeDefault enableRotate={controls} enableZoom={controls} />
        <pointLight color="white" position={[0, 0, 0]} intensity={1} distance={2000} />
        <ambientLight intensity={0.05} />
        <Environment background files={[...starAssets]} blur={0.2} />
        <Planets selected={selected} reset={reset} planetHandler={planetHandler} />
      </Suspense>
    </Canvas>
    <Loader />
    <TextDisplay content={content} hidden={hidden} setHidden={setHidden} navCollapsed={navCollapsed} />
    <Controls selected={selected} />
    </>
  );
};

export default App;

//! FIX:
// loading bar fix, custom?
// add technologies used for each project
// add fun facts to each planet
// move planet to the left if content is displayed? might not need if facts are on planets
// carousel for projects