import { useRef, useEffect, useMemo } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import PlanetConstructor from '../Utils/PlanetConstructor';
import {
  sunAssets,
  mercuryAssets,
  venusAssets,
  earthAssets,
  marsAssets,
  jupiterAssets,
  saturnAssets,
  uranusAssets,
  neptuneAssets,
  plutoAssets,
  saturnRingAssets,
  uranusRingAssets
} from '../Utils/loaders.js';

const Planets = () => {
  const sunRef = useRef();
  const mercuryRef = useRef();
  const venusRef = useRef();
  const earthRef = useRef();
  const marsRef = useRef();
  const jupiterRef = useRef();
  const saturnRef = useRef();
  const uranusRef = useRef();
  const neptuneRef = useRef();
  const plutoRef = useRef();

  const sunLoader = useLoader(TextureLoader, sunAssets);
  const mercuryLoader = useLoader(TextureLoader, mercuryAssets);
  const venusLoader = useLoader(TextureLoader, venusAssets);
  const earthLoader = useLoader(TextureLoader, earthAssets);
  const marsLoader = useLoader(TextureLoader, marsAssets);
  const jupiterLoader = useLoader(TextureLoader, jupiterAssets);
  const saturnLoader = useLoader(TextureLoader, saturnAssets);
  const uranusLoader = useLoader(TextureLoader, uranusAssets);
  const neptuneLoader = useLoader(TextureLoader, neptuneAssets);
  const plutoLoader = useLoader(TextureLoader, plutoAssets);
  const saturnRingLoader = useLoader(TextureLoader, saturnRingAssets);
  const uranusRingLoader = useLoader(TextureLoader, uranusRingAssets);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const angle = time * 0.5;
    const angleX = Math.cos(angle) * 2;
    const angleZ = Math.sin(angle) * 2;

    const eulerRotation = new THREE.Euler(0, time + 0.004, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);

    const saturnEulerRotation = new THREE.Euler(0, time + 0.004, 0);
    const saturnQuaternionRotation = new THREE.Quaternion();
    saturnQuaternionRotation.setFromEuler(saturnEulerRotation);

    sunRef.current.setRotation(quaternionRotation);
    saturnRef.current.setRotation(saturnQuaternionRotation);
    // sunRef.current.setTranslation({x: angleX, y: 0, z: angleZ})
    // console.log(state.scene.children)
  });

  return (
    <Physics gravity={[0, 0, 0]} >
      <RigidBody ref={sunRef} type="kinematicPosition" >
        <mesh position-x={0} >
          <sphereGeometry args={[16, 30, 30]} />
          <PlanetConstructor
            map={sunLoader[0]}
            displacementMap={sunLoader[1]}
            normalMap={sunLoader[3]}
            aoMap={sunLoader[4]}
            emissiveMap={sunLoader[2]}
            emissive="red"
            emissiveIntensity={4}
            />
        </mesh>
      </RigidBody>

      <RigidBody ref={mercuryRef} type="kinematicPosition" >
        <mesh position-x={28} >
          <sphereGeometry args={[3.2, 30, 30]} />
          <PlanetConstructor
            map={mercuryLoader[0]}
            displacementMap={mercuryLoader[1]}
            normalMap={mercuryLoader[2]}
            aoMap={mercuryLoader[3]}
            displacementScale={0.5}
          />
        </mesh>
      </RigidBody>

      <RigidBody ref={venusRef} type="kinematicPosition" >
        <mesh position-x={44} >
          <sphereGeometry args={[5.8, 30, 30]} />
          <PlanetConstructor
            map={venusLoader[0]}
            displacementMap={venusLoader[1]}
            normalMap={venusLoader[2]}
            aoMap={venusLoader[3]}
          />
        </mesh>
      </RigidBody>

      <RigidBody ref={earthRef} type="kinematicPosition" >
        <mesh position-x={62} >
          <sphereGeometry args={[6, 30, 30]} />
          <PlanetConstructor
            map={earthLoader[0]}
            displacementMap={earthLoader[1]}
            normalMap={earthLoader[2]}
            aoMap={earthLoader[3]}
            displacementScale={0.5}
          />
        </mesh>
      </RigidBody>

      <RigidBody ref={marsRef} type="kinematicPosition" >
        <mesh position-x={78} >
          <sphereGeometry args={[4, 30, 30]} />
          <PlanetConstructor
            map={marsLoader[0]}
            displacementMap={marsLoader[1]}
            normalMap={marsLoader[2]}
            aoMap={marsLoader[3]}
          />
        </mesh>
      </RigidBody>

      <RigidBody ref={jupiterRef} type="kinematicPosition" >
        <mesh position-x={100} >
          <sphereGeometry args={[12, 30, 30]} />
          <PlanetConstructor
            map={jupiterLoader[0]}
            displacementMap={jupiterLoader[1]}
            normalMap={jupiterLoader[2]}
            aoMap={jupiterLoader[3]}
          />
        </mesh>
      </RigidBody>

      <RigidBody ref={saturnRef} type="kinematicPosition" >
        <group>
          <mesh position-x={138} >
            <sphereGeometry args={[10, 30, 30]} />
            <PlanetConstructor
              map={saturnLoader[0]}
              displacementMap={saturnLoader[1]}
              normalMap={saturnLoader[2]}
              aoMap={saturnLoader[3]}
              />
          </mesh>
          <mesh position-x={138} rotation-x={-0.5 * Math.PI} >
            <ringGeometry args={[15, 20, 32]} />
            <meshStandardMaterial
              map={saturnRingLoader[0]}
              displacementMap={saturnRingLoader[1]}
              normalMap={saturnRingLoader[2]}
              aoMap={saturnRingLoader[3]}
            />
          </mesh>
        </group>
      </RigidBody>

      <RigidBody ref={uranusRef} type="kinematicPosition" >
        <group>
          <mesh position-x={176} >
            <sphereGeometry args={[7, 30, 30]} />
            <PlanetConstructor
              map={uranusLoader[0]}
              displacementMap={uranusLoader[1]}
              normalMap={uranusLoader[2]}
              aoMap={uranusLoader[3]}
            />
          </mesh>
          <mesh position-x={176} rotation-x={-0.25 * Math.PI} >
            <ringGeometry args={[11, 12, 32]} />
            <meshStandardMaterial
              map={uranusRingLoader[0]}
              displacementMap={uranusRingLoader[1]}
              normalMap={uranusRingLoader[2]}
              aoMap={uranusRingLoader[3]}
            />
          </mesh>
        </group>
      </RigidBody>

      <RigidBody ref={neptuneRef} type="kinematicPosition" >
        <mesh position-x={200} >
          <sphereGeometry args={[7, 30, 30]} />
          <PlanetConstructor
            map={neptuneLoader[0]}
            displacementMap={neptuneLoader[1]}
            normalMap={neptuneLoader[2]}
            aoMap={neptuneLoader[3]}
          />
        </mesh>
      </RigidBody>

      <RigidBody ref={plutoRef} type="kinematicPosition" >
        <mesh position-x={216} >
          <sphereGeometry args={[2.8, 30, 30]} />
          <PlanetConstructor
            map={plutoLoader[0]}
            displacementMap={plutoLoader[1]}
            normalMap={plutoLoader[2]}
            aoMap={plutoLoader[3]}
          />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default Planets;