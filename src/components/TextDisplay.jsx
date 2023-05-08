import Me from './htmlContent/Me';
import GymX5000 from './htmlContent/GymX5000';
import Atelier from './htmlContent/Atelier';
import CowardlyDogs from './htmlContent/CowardlyDogs';

const TextDisplay = ({ content, hidden, setHidden }) => {

  const contentHandler = () => {
    switch(content) {
      case 1:
        return <Me setHidden={setHidden} />;
      case 2:
        return <GymX5000 setHidden={setHidden} />
      case 3:
        return <Atelier setHidden={setHidden} />
      case 4:
        return <CowardlyDogs setHidden={setHidden} />
    };
  };

  return hidden ? null : (
    <>
    {contentHandler()}
    </>
  );
};

export default TextDisplay;