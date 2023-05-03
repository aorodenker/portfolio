import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { Physics, RigidBody } from '@react-three/rapier';
import Planets from './components/Planets';

const App = () => {
  return(
    <>
    <Perf position="top-left" />
    <OrbitControls makeDefault />
    <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />

    <Planets />
    </>
  );
};

export default App;

      // sun.rotation.y += delta + 0.004;
      // mercury.rotation.y += delta + 0.004;
      // venus.rotation.y += delta + 0.002;
      // earth.rotation.y += delta + 0.02;
      // mars.rotation.y += delta + 0.018;
      // jupiter.rotation.y += delta + 0.04;
      // saturn.rotation.y += delta + 0.038;
      // uranus.rotation.y += delta + 0.03;
      // neptune.rotation.y += delta + 0.032;
      // pluto.rotation.y += delta + 0.008;