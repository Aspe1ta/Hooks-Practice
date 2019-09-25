import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import robot from "./assets/Gif.gif"

function App() {
  const [red, redChange] = useState(0);
  const [green, greenChange] = useState(0);
  const [blue, blueChange] = useState(0);

  return (
    <>



      <div className="Back" style={{ backgroundColor: "rgb(" + red + "," + green + "," + blue + ")" }}>
      
      <img src={robot} alt='Robot'></img>

      </div>

      <div className="Main">
      <div className="Box">
        <button
          onClick={() => {
            if (red < 255) {
              redChange(red + 50);
            }
          }}
        >
          +
        </button>
        <h3>RED</h3>
        <button
          onClick={() => {
            if (red > 0) {
              redChange(red - 50);
            }
          }}
        >
          -
        </button>
      </div>

      <div className="Box">
        <button
          onClick={() => {
            if (green < 255) {
              greenChange(green + 50);
            }
          }}
        >
          +
        </button>
        <h3>GREEN</h3>

        <button
          onClick={() => {
            if (green > 0) {
              greenChange(green - 50);
            }
          }}
        >
          -
        </button>
      </div>

      <div className="Box">
        <button
          onClick={() => {
            if (blue < 255) {
              blueChange(blue + 50);
            }
          }}
        >
          +
        </button>
        <h3>Blue</h3>
        <button
          onClick={() => {
            if (green > 0) {
              blueChange(blue - 50);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
