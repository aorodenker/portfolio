const MarbleRace = ({ setHidden, navCollapsed }) => {
  return (
    <div className={navCollapsed ? "htmlScreen" : "htmlScreen re-align"} >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <a className="project-link" href="https://marble-race-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="gymX" src="/content/marble.png" />
      </a>
      <p>
        Proof of concept for a Marble Racing mini-game. Features pseudo-procedural level generation,
        keyboard controls, obstacle course timer, realistic-ish physics, and an intuitive interface.
      </p>
      <h6 className="tech-used">Technologies Used</h6>
      <p className="tech">React, Zustand, React-three (fiber, rapier, drei, and postprocessing) WebGL</p>
      <p className="tech">Testing: Perf, Vercel</p>
    </div>
  );
};

export default MarbleRace;