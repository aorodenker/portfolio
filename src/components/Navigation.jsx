const Navigation = ({ setSelected, setContent, setHidden }) => {

  const clickHandler = (idx) => {
    setContent(idx);
    setHidden(false);
  };

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Andrew Orodenker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" onClick={() => clickHandler(1)}> About Me </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Projects
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" onClick={() => clickHandler(2)} >GymX5000</a>
              <a className="dropdown-item" onClick={() => clickHandler(3)} >Atelier</a>
              <a className="dropdown-item" onClick={() => clickHandler(4)} >Cowardly Dogs</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Planets
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" onClick={() => setSelected(1)} > Mercury </a>
              <a className="dropdown-item" onClick={() => setSelected(2)} > Venus </a>
              <a className="dropdown-item" onClick={() => setSelected(3)} > Earth </a>
              <a className="dropdown-item" onClick={() => setSelected(4)} > Mars </a>
              <a className="dropdown-item" onClick={() => setSelected(5)} > Jupiter </a>
              <a className="dropdown-item" onClick={() => setSelected(6)} > Saturn </a>
              <a className="dropdown-item" onClick={() => setSelected(7)} > Uranus </a>
              <a className="dropdown-item" onClick={() => setSelected(8)} > Neptune </a>
              <a className="dropdown-item" onClick={() => setSelected(9)} > Pluto </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Links
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="https://www.linkedin.com/in/orodenker/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="dropdown-item" href="https://www.github.com/aorodenker" target="_blank" rel="noopener noreferrer">Github</a>
              <a className="dropdown-item" href="mailto:andrew.orodenker@gmail.com?subject=Hello!" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;