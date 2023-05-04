import { useRef, useState } from 'react';
import { TextureLoader } from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import PlanetConstructor from '../Utils/PlanetConstructor';
import rotationCalc from '../Utils/rotationCalc.js';
import orbitCalc from '../Utils/orbitCalc.js';
import zoomHandler from '../Utils/zoomHandler.js';
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
} from '../Utils/maps.js';


const Planets = () => {
  const planetsRef = useRef();
  const sunSize = 100;
  const [planet, setPlanet] = useState(0);

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
    if (planetsRef.current) {
      const ref = planetsRef.current.children
      rotationCalc(delta, ref);
      orbitCalc(state, ref);
    };
    zoomHandler(planet);

    const camera = state.camera;
    const mesh = planetsRef.current.children[3];
    const distance = 5;

    const position = mesh.position.clone();
    position.z += distance;

    const lookAt = mesh.position.clone();
    lookAt.x += 2;

    camera.position.copy(position);
    camera.lookAt(lookAt);
  });

  return (
    <>
    <group ref={planetsRef} >

      <mesh position-x={0} onClick={() => setPlanet(0)} >
        <sphereGeometry args={[sunSize / 5, 30, 30]} />
        <PlanetConstructor
          map={sunLoader[0]}
          displacementMap={sunLoader[1]}
          emissiveMap={sunLoader[2]}
          normalMap={sunLoader[3]}
          aoMap={sunLoader[4]}
          emissive="white"
          emissiveIntensity={2}
          aoMapIntensity={10}
        />
      </mesh>

      <mesh position-x={29} onClick={() => setPlanet(1)} >
        <sphereGeometry args={[sunSize * 0.0038, 30, 30]} />
        <PlanetConstructor
          map={mercuryLoader[0]}
          displacementMap={mercuryLoader[1]}
          normalMap={mercuryLoader[2]}
          aoMap={mercuryLoader[3]}
          normalScale={5}
          displacementScale={0.05}
        />
      </mesh>

      <mesh position-x={54} onClick={() => setPlanet(2)} >
        <sphereGeometry args={[sunSize * 0.0095, 30, 30]} />
        <PlanetConstructor
          map={venusLoader[0]}
          displacementMap={venusLoader[1]}
          normalMap={venusLoader[2]}
          aoMap={venusLoader[3]}
          displacementScale={0.4}
        />
      </mesh>

      <mesh position-x={75} onClick={() => setPlanet(3)} >
        <sphereGeometry args={[sunSize * 0.01, 100, 100]} />
        <PlanetConstructor
          map={earthLoader[0]}
          displacementMap={earthLoader[1]}
          normalMap={earthLoader[2]}
          aoMap={earthLoader[3]}
          displacementScale={0.06}
        />
      </mesh>

      <mesh position-x={114} onClick={() => setPlanet(4)} >
        <sphereGeometry args={[sunSize * 0.0053, 30, 30]} />
        <PlanetConstructor
          map={marsLoader[0]}
          displacementMap={marsLoader[1]}
          normalMap={marsLoader[2]}
          aoMap={marsLoader[3]}
          displacementScale={0.06}
        />
      </mesh>

      <mesh position-x={389.5} onClick={() => setPlanet(5)} >
        <sphereGeometry args={[sunSize * 0.1121, 100, 100]} />
        <PlanetConstructor
          map={jupiterLoader[0]}
          displacementMap={jupiterLoader[1]}
          normalMap={jupiterLoader[2]}
          aoMap={jupiterLoader[3]}
        />
      </mesh>

      <mesh position-x={717} onClick={() => setPlanet(6)} >
        <sphereGeometry args={[sunSize * 0.0945, 30, 30]} />
        <PlanetConstructor
          map={saturnLoader[0]}
          displacementMap={saturnLoader[1]}
          normalMap={saturnLoader[2]}
          aoMap={saturnLoader[3]}
        />
      </mesh>
      <mesh position-x={717} rotation-x={-0.5 * Math.PI} >
        <ringGeometry args={[15, 25, 32]} />
        <meshStandardMaterial
          color="#966d36"
          displacementMap={saturnRingLoader[1]}
          normalMap={saturnRingLoader[2]}
          aoMap={saturnRingLoader[3]}
          aoMapIntensity={2}
        />
      </mesh>

      <mesh position-x={1436.5} onClick={() => setPlanet(8)} >
        <sphereGeometry args={[sunSize * 0.0401, 30, 30]} />
        <PlanetConstructor
          map={uranusLoader[0]}
          displacementMap={uranusLoader[1]}
          normalMap={uranusLoader[2]}
          aoMap={uranusLoader[3]}
        />
      </mesh>
      <mesh position-x={1436.5} rotation-x={-0.25 * Math.PI} >
        <ringGeometry args={[9, 10, 32]} />
        <meshStandardMaterial
          map={uranusRingLoader[0]}
          displacementMap={uranusRingLoader[1]}
          normalMap={uranusRingLoader[2]}
          aoMap={uranusRingLoader[3]}
        />
      </mesh>

      <mesh position-x={2247.5} onClick={() => setPlanet(10)} >
        <sphereGeometry args={[sunSize * 0.0388, 30, 30]} />
        <PlanetConstructor
          map={neptuneLoader[0]}
          displacementMap={neptuneLoader[1]}
          normalMap={neptuneLoader[2]}
          aoMap={neptuneLoader[3]}
        />
      </mesh>

      <mesh position-x={2247.5} onClick={() => setPlanet(11)} >
        <sphereGeometry args={[sunSize * 0.0018, 30, 30]} />
        <PlanetConstructor
          map={plutoLoader[0]}
          displacementMap={plutoLoader[1]}
          normalMap={plutoLoader[2]}
          aoMap={plutoLoader[3]}
        />
      </mesh>

    </group>
    </>
  );
};

export default Planets;