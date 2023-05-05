import { OrbitControls, Environment } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { starAssets } from './Utils/starAssets.js';
import Planets from './components/Planets';

const App = () => {
  return(
    <>
    <Perf position="top-left" />
    <OrbitControls makeDefault />
    <pointLight color="white" position={[0, 0, 0]} intensity={1} distance={3000} />
    <ambientLight intensity={0.05} />

    <Environment background files={[...starAssets]} blur={0.2} />
    <Planets />
    </>
  );
};

export default App;