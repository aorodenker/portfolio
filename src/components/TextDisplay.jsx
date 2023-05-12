import Me from './htmlContent/Me';
import GymX5000 from './htmlContent/GymX5000';
import Atelier from './htmlContent/Atelier';
import CowardlyDogs from './htmlContent/CowardlyDogs';
import MarbleRace from './htmlContent/MarbleRace';

const TextDisplay = ({ content, hidden, setHidden, navCollapsed }) => {

  const contentHandler = () => {
    switch (content) {
      case 1:
        return <Me setHidden={setHidden} navCollapsed={navCollapsed} />;
      case 2:
        return <MarbleRace setHidden={setHidden} navCollapsed={navCollapsed} />
      case 3:
        return <GymX5000 setHidden={setHidden} navCollapsed={navCollapsed} />
      case 4:
        return <Atelier setHidden={setHidden} navCollapsed={navCollapsed} />
      case 5:
        return <CowardlyDogs setHidden={setHidden} navCollapsed={navCollapsed} />
    }
  };

  return hidden ? null : (
    <>
      {contentHandler()}
    </>
  );
};

export default TextDisplay;