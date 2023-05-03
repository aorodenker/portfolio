const rotationCalc = (state, delta, ref) => {
  ref[0].rotation.y += delta * .4;
      // console.log(ref)

      const center = [0, 0, 0];

       const angle = state.clock.getElapsedTime() * 0.5;
       const x = 20 * Math.sin(angle);
       const z = 20 * Math.cos(angle);

       ref[1].position.set(x, center[1], z);
};

export default rotationCalc;