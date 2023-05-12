const GymX5000 = ({ setHidden, navCollapsed }) => {
  return(
    <div className={ navCollapsed ? "htmlScreen" : "htmlScreen re-align" } >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <a className="project-link" href="https://github.com/Slytherin-Blue-Ocean/GymX5000" target="_blank" rel="noopener noreferrer">
        <img className="gymX" src="/content/gymX.jpg" />
      </a>
      <p>
        Gamified fitness app that brings health,
        fitness and competition to living a healthy lifestyle,
        providing users with an all in one experience
        where you can stay motivated, eat healthy, get stronger,
        and compete with friends. This app uses a multipurpose
        card system that dynamically renders many different activities
        from a polymorphic postgreSQL database. GymX5000 includes a
        unique challenge feature that contains interactable 3D trophies created
        using three.js that are awarded upon completing tasks.
      </p>
      <h6 className="tech-used">Technologies Used</h6>
      <p className="tech">Frontend: React, Three.js, MUI, Bootstrap</p>
      <p className="tech">Backend: Node, Express, PostgreSQL, AWS</p>
      <p className="tech">Testing: Cypress</p>
    </div>
  );
};

export default GymX5000;