import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import rotationCalc from '../Utils/rotationCalc';
import orbitCalc from '../Utils/orbitCalc';
import zoomHandler from '../Utils/zoomHandler';

const Planets = ({ selected, reset, planetHandler }) => {
  const { camera, controls } = useThree();
  const originalCamPosition = [-157, 151, -139];
  const originalCamTarget = [0, 0, 0];

  const planetsRef = useRef();
  const sunModel = useGLTF('glb/sun.glb');
  const mercuryModel = useGLTF('glb/mercury.glb');
  const venusModel = useGLTF('glb/venus.glb');
  const earthModel = useGLTF('glb/earth.glb');
  const marsModel = useGLTF('glb/mars.glb');
  const jupiterModel = useGLTF('glb/jupiter.glb');
  const saturnModel = useGLTF('glb/saturn.glb');
  const uranusModel = useGLTF('glb/uranus.glb');
  const neptuneModel = useGLTF('glb/neptune.glb');
  const plutoModel = useGLTF('glb/pluto.glb');

  useFrame((state, delta) => {
    if (planetsRef.current) {
      const ref = planetsRef.current.children
      rotationCalc(delta, ref);
      orbitCalc(state, ref);
      selected > 0 ? zoomHandler(state, delta, selected, ref) : null;
    }
  });

  useEffect(() => {
    planetsRef.current.traverse((child) => {
      if (child.type === 'Mesh') {
        child.material.roughness = 1;
        child.material.metalness = 0;
      }
    });
  }, [planetsRef]);

  useEffect(() => {
    if (controls && selected === 0) {
      camera.position.set(...originalCamPosition);
      camera.lookAt(...originalCamTarget);
      controls.reset();
    }
  }, [reset]);

  return (
    <>
    <group ref={planetsRef} >
      <primitive object={sunModel.scene} scale={2} onClick={() => planetHandler(0)} />
      <primitive object={mercuryModel.scene} position-x={55} scale={1.5} onClick={() => planetHandler(1)} />
      <primitive object={venusModel.scene} position-x={75} scale={0.05} onClick={() => planetHandler(2)} />
      <primitive object={earthModel.scene} position-x={100} scale={5} onClick={() => planetHandler(3)} />
      <primitive object={marsModel.scene} position-x={120} scale={2} onClick={() => planetHandler(4)} />
      <primitive object={jupiterModel.scene} position-x={175} scale={.3} onClick={() => planetHandler(5)} />
      <primitive object={saturnModel.scene} position-x={300} scale={2500} rotation-x={- Math.PI / 10} onClick={() => planetHandler(6)} />
      <primitive object={uranusModel.scene} position-x={400} scale={15} onClick={() => planetHandler(7)} />
      <primitive object={neptuneModel.scene} position-x={475} scale={0.15} onClick={() => planetHandler(8)} />
      <primitive object={plutoModel.scene} position-x={525} scale={0.02} onClick={() => planetHandler(9)} />
    </group>
    </>
  );
};

export default Planets;