const Atelier = ({ setHidden, navCollapsed }) => {
  return(
    <div className={ navCollapsed ? "htmlScreen" : "htmlScreen re-align" } >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <a className="project-link" href="https://github.com/LinkSDC/productsSDC" target="_blank" rel="noopener noreferrer">
        <h2 className="project-title">
          Atelier
        </h2>
      </a>
      <p>
        RESTful rebuild of a clothing API from the ground up, utilizing NGINX
        load balancing on AWS EC2 instances for horizontal scalability.
        Reduced average query speed from 250ms to 35ms through SQL query
        refactoring and indexing.
      </p>
    </div>
  );
};

export default Atelier;