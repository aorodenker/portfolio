const CowardlyDogs = ({ setHidden, navCollapsed }) => {
  return(
    <div className={ navCollapsed ? "htmlScreen" : "htmlScreen re-align" } >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <a className="project-link" href="https://github.com/CowardlyDogs/fec" target="_blank" rel="noopener noreferrer">
        <h2 className="project-title">
          Cowardly Dogs
        </h2>
      </a>
      <p>
        E-commerce front end built in React. Features include product overview,
        related item carousel built from scratch (no bootstrap, mui, etc.), a
        user-decided outfit section persisting in local storage, user reviews as well
        as Q&A.
      </p>
      <h6 className="tech-used">Technologies Used</h6>
      <p className="tech">React, Axios, CSS3, HTML5</p>
      <p className="tech">Testing: Jest</p>
    </div>
  );
};

export default CowardlyDogs;