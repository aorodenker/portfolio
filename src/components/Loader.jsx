import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { loaded } = useProgress();

  return (
    <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${((loaded / 42) * 100).toFixed(0)}%` }} />
    </div>
  );
};

export default Loader;