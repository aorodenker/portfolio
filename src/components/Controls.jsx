const Controls = ({ selected }) => {
  return (
    <>
    { selected < 1 ? <img className="cam-controls" src="/content/controls.svg" /> : null }
    </>
  )
};

export default Controls;