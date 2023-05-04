const orbitCalc = (state, ref) => {
  const standardAngle = state.clock.getElapsedTime() * 100;

  const merAngle = standardAngle / 88;
  const vAngle = standardAngle / 225;
  const eAngle = standardAngle / 365;
  const marAngle = standardAngle / 687;
  const jAngle = standardAngle / 4333;
  const sAngle = standardAngle / 10759;
  const uAngle = standardAngle / 30687;
  const nAngle = standardAngle / 60190;
  const pAngle = standardAngle / 90560;

  ref[1].position.set(29 * Math.sin(merAngle), 0, 29 * Math.cos(merAngle));
  ref[2].position.set(54 * Math.sin(vAngle), 0, 54 * Math.cos(vAngle));
  ref[3].position.set(75 * Math.sin(eAngle), 0, 75 * Math.cos(eAngle));
  ref[4].position.set(114 * Math.sin(marAngle), 0, 114 * Math.cos(marAngle));
  ref[5].position.set(389.5 * Math.sin(jAngle), 0, 389.5 * Math.cos(jAngle));
  ref[6].position.set(717 * Math.sin(sAngle), 0, 717 * Math.cos(sAngle));
  ref[7].position.set(717 * Math.sin(sAngle), 0, 717 * Math.cos(sAngle));
  ref[8].position.set(1436.5 * Math.sin(uAngle), 0, 1436.5 * Math.cos(uAngle));
  ref[9].position.set(1436.5 * Math.sin(uAngle), 0, 1436.5 * Math.cos(uAngle));
  ref[10].position.set(2247.5 * Math.sin(nAngle), 0, 2247.5 * Math.cos(nAngle));
  ref[11].position.set(2247.5 * Math.sin(pAngle), 0, 2247.5 * Math.cos(pAngle));
};

export default orbitCalc;