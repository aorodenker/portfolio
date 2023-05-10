const zoomHandler = (state, delta, idx, ref) => {
  const camera = state.camera;
  const mesh = ref[idx];
  let offsetZ, speed;

  switch(idx) {
    case 1:
      offsetZ = 2;
      speed = 1;
      break;
    case 2:
      offsetZ = 20;
      speed = 0.6;
      break;
    case 3:
      offsetZ = 20;
      speed = 0.5;
      break;
    case 4:
      offsetZ = 15;
      speed = 0.4;
      break;
    case 5:
      offsetZ = 150;
      speed = 0.1;
      break;
    case 6:
      offsetZ = 150;
      speed = 0.1;
      break;
    case 7:
      offsetZ = 80;
      speed = 0.1;
      break;
    case 8:
      offsetZ = 80;
      speed = 0.1;
      break;
    case 9:
      offsetZ = 2;
      speed = 1;
      break;
  }

  const currentPos = camera.position.clone();
  const currentTarget = mesh.position.clone();
  const dir = currentTarget.sub(currentPos);
  const dist = dir.length();
  dir.normalize();
  const amount = dist * delta * speed;

  if (dist > offsetZ) {
    currentPos.add(dir.multiplyScalar(amount));
  } else {
    currentPos.add(dir.multiplyScalar(amount / 100));
  }

  camera.position.copy(currentPos);
  camera.lookAt(mesh.position);
};

export default zoomHandler;