const CowardlyDogs = ({ setHidden }) => {
  return(
    <div className="htmlScreen" >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <a href="https://github.com/CowardlyDogs/fec" target="_blank" rel="noopener noreferrer">
        <h2>
          Cowardly Dogs
        </h2>
      </a>
      <p>
        E-commerce front end built in React. Features include product overview,
        related item carousel built from scratch (no bootstrap, mui, etc.), a
        user-decided outfit section persisting in local storage, user reviews as well
        as Q&A.
      </p>
    </div>
  );
};

export default CowardlyDogs;