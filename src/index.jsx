import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      camera={{
        fov: 50,
        near: 0.1,
        far: 5000,
        position: [-90, 140, 140]
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>,
);
