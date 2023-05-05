import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      shadows={true}
      camera={{
        fov: 50,
        near: 0.1,
        far: 5000,
        position: [-157, 151, -139],
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>,
);
