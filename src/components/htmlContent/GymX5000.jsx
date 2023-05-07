const GymX5000 = ({ setHidden }) => {
  return(
    <div className="htmlScreen" >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <a href="https://github.com/Slytherin-Blue-Ocean/GymX5000" target="_blank" rel="noopener noreferrer">
        <img className="gymX" src="/content/gymX.jpg" />
        <h2>
          GymX5000
        </h2>
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
    </div>
  );
};

export default GymX5000;