import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import rotationCalc from '../Utils/rotationCalc.js';
import orbitCalc from '../Utils/orbitCalc.js';
import zoomHandler from '../Utils/zoomHandler.js';



const Planets = () => {
  const planetsRef = useRef();
  const [selected, setSelected] = useState(0);
  const camera = useThree((state) => state.camera);

  let distance;

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
    };
    if (selected > 0) {
      zoomHandler(state, delta, selected, planetsRef.current.children, distance);
    };
  });

  useEffect(() => {
    planetsRef.current.traverse((child) => {
      if (child.type === 'Mesh') {
        child.material.roughness = 1;
        child.material.metalness = 0;
      };
    });
  }, [planetsRef]);

  // const clickHandler = (idx) => {
  //   setSelected(idx);
  //   distance = camera.position.distanceTo(planetsRef.current.children[idx].position);
  // };

  return (
    <>
    <group ref={planetsRef} >
      <primitive object={sunModel.scene} scale={2} />
      <primitive object={mercuryModel.scene} position-x={55} scale={1.5} onClick={() => setSelected(1)} />
      <primitive object={venusModel.scene} position-x={75} scale={0.05} onClick={() => setSelected(2)} />
      <primitive object={earthModel.scene} position-x={100} scale={5} onClick={() => setSelected(3)} />
      <primitive object={marsModel.scene} position-x={120} scale={2} onClick={() => setSelected(4)} />
      <primitive object={jupiterModel.scene} position-x={175} scale={.3} onClick={() => setSelected(5)} />
      <primitive object={saturnModel.scene} position-x={300} scale={2500} rotation-x={- Math.PI / 10} onClick={() => setSelected(6)} />
      <primitive object={uranusModel.scene} position-x={400} scale={15} rotation-x={Math.PI / 2} onClick={() => setSelected(7)} />
      <primitive object={neptuneModel.scene} position-x={475} scale={0.15} onClick={() => setSelected(8)} />
      <primitive object={plutoModel.scene} position-x={525} scale={0.02} onClick={() => setSelected(9)} />
    </group>
    </>
  );
};

export default Planets;