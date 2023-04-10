import React from "react";
const Practice = () => {
  const [slide, setSlide] = React.useState(false);
  const [secSlide, setSecSlide] = React.useState(false);
  const [thirdSlide, setThirdSlide] = React.useState(false);

  return (
    <>
      <div className="d-flex inline mx-5 mt-5">
        <button
          onClick={() =>
            setSlide(true) | setSecSlide(false) | setThirdSlide(false)
          }
          className="edu-button"
        ></button>

        <button
          onClick={() =>
            setSecSlide(true) | setSlide(false) | setThirdSlide(false)
          }
          className="edu-button"
        ></button>
        <button
          onClick={() =>
            setThirdSlide(true) | setSlide(false) | setSecSlide(false)
          }
          className="edu-button"
        ></button>
      </div>
      <h1>{slide && <p>Hussain</p>}</h1>
      <h1>{secSlide && <p>Ali</p>}</h1>
      <h1>{thirdSlide && <p>Alnakhli</p>}</h1>
    </>
  );
};

export default Practice;
