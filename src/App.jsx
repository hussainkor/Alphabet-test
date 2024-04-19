import { useState } from "react";
import alphaTest from "./data";

// const alpha = "abcdefghijklmnopqrstuvwxyz";

// https://dribbble.com/shots/19578948-Educational-App-for-Kids-Exploration
// https://dribbble.com/shots/18532121-Kids-Educational-App
// https://dribbble.com/shots/23081391-Child-education-App-Design

export default function App() {
  const [count, setCount] = useState(1);
  const [isModal, setIsmodal] = useState(false);
  const { letter, name, image, details } = alphaTest[count - 1];

  const random = Math.round(Math.random() * 25) + 1;

  function alphaRandom() {
    setCount(random);
  }

  function handleModal(action) {
    if (action === "open") {
      setIsmodal(true);
    } else {
      setIsmodal(false);
    }
  }

  function countMinus() {
    if (count > 1) {
      setCount((c) => c - 1);
    }
  }

  function countPlus() {
    if (count < 26) {
      setCount((c) => c + 1);
    }
  }

  return (
    <>
      <div className="title">
        <h1>KiDucate</h1>
        <p>The best companion for your kids learning</p>
      </div>
      <div className="App">
        <header>
          <button onClick={countMinus}>Prev</button>
          <h2>{letter} for</h2>
          <button onClick={countPlus}>Next</button>
        </header>
        <div className="alphabet">
          <img src={image} alt={name} />
          <h3>
            {name}{" "}
            <a href="javascript:void()" onClick={() => handleModal("open")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="info-icon"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </a>
          </h3>
          <button onClick={alphaRandom}>Random</button>
        </div>
      </div>
      {isModal && (
        <div className="modal-trans">
          <div className="modal">
            <span className="close-btn" onClick={() => handleModal("close")}>
              X
            </span>
            <h3>{name}</h3>
            <p>
              <img src={image} alt={name} />
            </p>
            <p>{details ? details.fullDetails : null}</p>
          </div>
        </div>
      )}
    </>
  );
}
