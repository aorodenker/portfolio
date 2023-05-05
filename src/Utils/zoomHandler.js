const zoomHandler = (state, delta, idx, ref, distance) => {
    const camera = state.camera;
    const mesh = ref[idx];
    let offsetZ, offsetX;

    switch(idx) {
      case 1:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 2:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 3:
        offsetZ = 20;
        offsetX = 2;
        break;
      case 4:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 5:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 6:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 7:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 8:
        offsetZ = 5;
        offsetX = 2;
        break;
      case 9:
        offsetZ = 5;
        offsetX = 2;
        break;
    };

    // const newDistance = distance - delta * 2; // adjust the 5 to control the zoom speed
    // camera.position.set(0, 0, newDistance);
    // camera.lookAt(ref[idx].position);

    const position = mesh.position.clone();
    position.z += offsetZ;
    position.y += offsetZ / 4;

    const lookAt = mesh.position.clone();
    lookAt.x += offsetX;

    camera.position.copy(position);
    camera.lookAt(lookAt);
};

export default zoomHandler;