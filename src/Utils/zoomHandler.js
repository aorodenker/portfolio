const zoomHandler = (state, delta, idx, ref, distance) => {
    const camera = state.camera;
    const mesh = ref[idx];
    let offsetZ;

    switch(idx) {
      case 1:
        offsetZ = 10;
        break;
      case 2:
        offsetZ = 20;
        break;
      case 3:
        offsetZ = 20;
        break;
      case 4:
        offsetZ = 15;
        break;
      case 5:
        offsetZ = 150;
        break;
      case 6:
        offsetZ = 150;
        break;
      case 7:
        offsetZ = 50;
        break;
      case 8:
        offsetZ = 50;
        break;
      case 9:
        offsetZ = 10;
        break;
    };

    // const newDistance = distance - delta * 2; // adjust the 5 to control the zoom speed
    // camera.position.set(0, 0, newDistance);
    // camera.lookAt(ref[idx].position);

    const position = mesh.position.clone();
    position.z += offsetZ;
    position.y += offsetZ / 4;

    const lookAt = mesh.position.clone();
    lookAt.x += offsetZ * 0.2;

    camera.position.copy(position);
    camera.lookAt(lookAt);
};

export default zoomHandler;