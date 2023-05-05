const rotationCalc = (delta, ref) => {
  const eRotation = 7.292e-5 * 3600; // 1 second = 1 hour

  ref[0].rotation.y += delta * (eRotation);
  ref[1].rotation.y += delta * (eRotation);
  ref[2].rotation.y += delta * (eRotation / 243);
  ref[3].rotation.y += delta * eRotation;
  ref[4].rotation.y += delta * (eRotation / 1.03);
  ref[5].rotation.y += delta * (eRotation / 0.41);
  ref[6].rotation.y += delta * (eRotation / 0.45);
  ref[7].rotation.y += delta * (eRotation / 0.72);
  ref[8].rotation.y += delta * (eRotation / 0.67);
  ref[9].rotation.y += delta * (eRotation / 6.39);
};

export default rotationCalc;