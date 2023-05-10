const orbitCalc = (state, ref) => {
  const standardAngle = state.clock.getElapsedTime() * 50;

  const merAngle = standardAngle / 150;
  const vAngle = standardAngle / 225;
  const eAngle = standardAngle / 365;
  const marAngle = standardAngle / 687;
  const jAngle = standardAngle / 1000;
  const sAngle = standardAngle / 1500;
  const uAngle = standardAngle / 2000;
  const nAngle = standardAngle / 2500;
  const pAngle = standardAngle / 3000;

  ref[1].position.set(55 * Math.sin(merAngle), 0, 55 * Math.cos(merAngle));
  ref[2].position.set(75 * Math.sin(vAngle), 0, 75 * Math.cos(vAngle));
  ref[3].position.set(100 * Math.sin(eAngle), 0, 100 * Math.cos(eAngle));
  ref[4].position.set(120 * Math.sin(marAngle), 0, 120 * Math.cos(marAngle));
  ref[5].position.set(175 * Math.sin(jAngle), 0, 175 * Math.cos(jAngle));
  ref[6].position.set(300 * Math.sin(sAngle), 0, 300 * Math.cos(sAngle));
  ref[7].position.set(400 * Math.sin(uAngle), 0, 400 * Math.cos(uAngle));
  ref[8].position.set(475 * Math.sin(nAngle), 0, 475 * Math.cos(nAngle));
  ref[9].position.set(525 * Math.sin(pAngle), 0, 525 * Math.cos(pAngle));
};

export default orbitCalc;