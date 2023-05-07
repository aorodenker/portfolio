const Me = ({ setHidden }) => {
  return(
    <div className="htmlScreen" >
      <img className="close-html" src="/content/close.png" onClick={() => setHidden(true)} />
      <img className="me" src="/content/me.jpg" />
      <h2>
        Hi, I'm Andrew Orodenker
      </h2>
      <p>
        Having been a self-taught software engineer as a hobby over
        the past few years, in 2021 I stepped away from a 10 year
        career as a Team Leader at Trader Joes to attend Hack Reactor`s
        Software Engineering Immersive.
      </p>
      <p>
        My passion as a software engineer is to create innovative solutions
        to complex problems and develop cutting-edge technology that can
        make a positive impact in the world. I am constantly looking for
        ways to use my technical knowledge and experience to create solutions
        that make life better for everyone. I'm driven by the challenge of
        creating solutions that are efficient and effective, and I'm
        passionate about building something that can change the world.
      </p>
    </div>
  );
};

export default Me;