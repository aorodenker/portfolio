const Navigation = ({ planetHandler, content, setContent, setHidden, setNavCollapsed }) => {

  const contentDisplay = (idx) => {
    if (content === idx) {
      setHidden((hide => {
        return !hide;
      }));
    } else {
      setContent(idx);
      setHidden(false);
    }
  };

  const navToggle = () => {
    setTimeout(() => {
      const nav = document.querySelector('.navbar-toggler');
      nav.classList.contains('collapsed') ? setNavCollapsed(false) : setNavCollapsed(true);
    }, 50);
  };

  return(
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" onClick={() => navToggle()}>
      <a className="navbar-brand" onClick={() => planetHandler(0)} >Andrew Orodenker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" onClick={() => contentDisplay(1)}> About Me </a>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Projects
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item drop-item" onClick={() => contentDisplay(2)} >GymX5000</a>
              <a className="dropdown-item drop-item" onClick={() => contentDisplay(3)} >Atelier</a>
              <a className="dropdown-item drop-item" onClick={() => contentDisplay(4)} >Cowardly Dogs</a>
            </div>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Links
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item drop-item" href="https://www.linkedin.com/in/orodenker/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="dropdown-item drop-item" href="https://www.github.com/aorodenker" target="_blank" rel="noopener noreferrer">Github</a>
              <a className="dropdown-item drop-item" href="mailto:andrew.orodenker@gmail.com?subject=Hello!" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PlanetCam
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item drop-item" onClick={() => planetHandler(1)} > Mercury </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(2)} > Venus </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(3)} > Earth </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(4)} > Mars </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(5)} > Jupiter </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(6)} > Saturn </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(7)} > Uranus </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(8)} > Neptune </a>
              <a className="dropdown-item drop-item" onClick={() => planetHandler(9)} > Pluto </a>
            </div>
          </li>
        </ul>
        <ul className="ml-auto navbar-nav">
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Controls
            </a>
            <div className="dropdown-menu drop" style={{right: '0', left: 'auto'}} aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item control-item warn">Disabled while using Planet Cam</a>
              <a className="dropdown-item control-item">Move Camera: Left Click (Hold)</a>
              <a className="dropdown-item control-item">Pan Camera: Right Click (Hold)</a>
              <a className="dropdown-item control-item">Zoom: Scroll Wheel</a>
            </div>
          </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={() => planetHandler(0)}> Reset Camera </a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;