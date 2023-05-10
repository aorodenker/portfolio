const rotationCalc = (delta, ref) => {
  const standardRotation = 0.262512;

  ref[0].rotation.y += delta * (standardRotation);
  ref[1].rotation.y += delta * (standardRotation);
  ref[2].rotation.y += delta * (standardRotation);
  ref[3].rotation.y += delta * standardRotation;
  ref[4].rotation.y += delta * (standardRotation / 1.03);
  ref[5].rotation.y += delta * (standardRotation / 0.41);
  ref[6].rotation.y += delta * (standardRotation / 0.45);
  ref[7].rotation.y += delta * (standardRotation / 0.72);
  ref[8].rotation.y += delta * (standardRotation / 0.67);
  ref[9].rotation.y += delta * (standardRotation / 6.39);
};

export default rotationCalc;