import { OrbitControls, Environment } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Planets from './components/Planets';
import { starAssets } from './Utils/maps.js';

const App = () => {
  return(
    <>
    <Perf position="top-left" />
    <OrbitControls makeDefault />
    <pointLight position={[0, 0, 0]} intensity={2} />
    <ambientLight intensity={0.01} />

    <Environment background files={[...starAssets]} blur={0.2} />
    <Planets />
    </>
  );
};

export default App;